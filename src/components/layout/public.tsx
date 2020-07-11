import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

type PublicLayoutProps = {
  children?: ReactNode;
  title?: string;
};

const PublicLayout: FC<PublicLayoutProps> = ({
  children,
  title = 'Default',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav></nav>
    </header>
    {children}
    <footer></footer>
  </>
);

export default PublicLayout;
