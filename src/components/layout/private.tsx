import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

type PrivateLayoutProps = {
  children?: ReactNode;
  title?: string;
};

const PrivateLayout: FC<PrivateLayoutProps> = ({
  children,
  title = 'Default',
}) => (
  <div>
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
  </div>
);

export default PrivateLayout;
