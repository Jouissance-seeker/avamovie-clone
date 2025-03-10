'use client';

import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface IProps {
  children: ReactNode;
}

export default function TemplateBase(props: IProps) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col gap-10 pb-16 lg:pb-0">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
