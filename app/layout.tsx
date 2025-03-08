import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'حمید شاهسونی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      dir="rtl"
      className="scrollbar-hide"
      lang="fa"
    >
      <body className="flex h-dvh flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
