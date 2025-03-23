'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Providers(props: IProps) {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#FF5990"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <NuqsAdapter>
        <Suspense>{props.children}</Suspense>
      </NuqsAdapter>
    </>
  );
}
