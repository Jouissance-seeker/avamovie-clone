'use client';

import { Crown, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="container fixed left-1/2 top-0 z-20 my-6 flex -translate-x-1/2 items-center justify-between">
      <Link href="#">
        <Image src="/images/logo.png" width={150} height={150} alt="لوگو" />
      </Link>
      <div className="flex items-center gap-4">
        <button className="flex size-11 items-center justify-center rounded-xl bg-gray-800/30">
          <SearchNormal1 size={24} color="#fff" />
        </button>
        <Link
          href="#"
          className="flex size-11 items-center justify-center rounded-xl bg-gray-800/30"
        >
          <Crown size={28} color="#F5C518" variant="Bold" />
        </Link>
        <Link
          href="#"
          className="hidden h-11 items-center justify-center rounded-xl bg-pink px-6 transition-all hover:bg-pink/90 lg:flex"
        >
          ورود
        </Link>
      </div>
    </header>
  );
}
