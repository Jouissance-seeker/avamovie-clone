'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#FF5990"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

const Nuqs = (props: IProps) => {
  return <NuqsAdapter>{props.children}</NuqsAdapter>;
};

export default function Providers(props: IProps) {
  return (
    <>
      <ProgressBar />
      <Nuqs>
        <Suspense>{props.children}</Suspense>
      </Nuqs>
    </>
  );
}
