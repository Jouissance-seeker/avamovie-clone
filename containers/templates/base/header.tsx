'use client';

import { Crown } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="container my-6 flex items-center justify-between">
      <Link href="#">
        <Image src="/images/logo.png" width={150} height={150} alt="لوگو" />
      </Link>
      <Link href="#" className="rounded-xl bg-gray-800/10 p-2">
        <Crown size="28" color="#F5C518" variant="Bold" />
      </Link>
    </header>
  );
}
