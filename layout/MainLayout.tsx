import Head from 'next/head';
import Link from 'next/link';
import s from '../styles/Home.module.scss';
import { FC, FunctionComponent, ReactNode, useState } from 'react';
import { Button } from '../components';
import { LayoutProps } from './MainLayout.props';

const MainLayout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav className={s.nav}>
        <Link href="/">
          <a>
            <Button appearance="primary" arrow="down">
              Home
            </Button>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Button appearance="ghost" arrow="down">
              About
            </Button>
          </a>
        </Link>
        <Link href="/posts">
          <a>
            <Button appearance="primary" arrow="down">
              Posts
            </Button>
          </a>
        </Link>
        <Link href="/types">
          <a>
            <Button appearance="ghost" arrow="right">
              TypeScript
            </Button>
          </a>
        </Link>
      </nav>
      <main>
        <div className={s.container}>{children}</div>
      </main>
    </>
  );
};
export default MainLayout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};
