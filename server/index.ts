import { parse } from 'url';
import { join } from 'path';

import nextApp from 'next';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';

import schema from './graphql';
import { db, IS_PROD, PORT, httpsRedirect, wwwRedirect } from './config';

type IntegrationContext = { req: Request; res: Response };
type ContextFn = (ctx: IntegrationContext) => Promise<Record<string, unknown>>;
const context: ContextFn = async ({ req }) => {
  console.log(req.body); // eslint-disable-line no-console
  return { req };
};

const nextServer = nextApp({ dev: !IS_PROD });
const handle = nextServer.getRequestHandler();

nextServer.prepare().then(() => {
  const server = express();
  server.enable('trust proxy');
  server.use(helmet());

  if (IS_PROD) {
    server.use(httpsRedirect());
    server.use(wwwRedirect());
    server.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  }

  server.use((req: Request, res: Response, next: NextFunction) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '../../.next', pathname);

      return nextServer.serveStatic(req, res, filePath);
    }

    return next();
  });

  const graphqlServer = new ApolloServer({
    schema,
    context,
    introspection: !IS_PROD,
    validationRules: [depthLimit(7)],
  });
  graphqlServer.applyMiddleware({ app: server, path: '/api/graphql' });

  server.get('*', (req: Request, res: Response) => handle(req, res));

  server.listen(PORT, async () => {
    console.log(`Running on http://localhost:${PORT}`); // eslint-disable-line no-console
    await db.init();
  });
});
