'use client';

import { Category, Crown, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header className="container fixed left-1/2 top-0 z-20 my-6 flex -translate-x-1/2 items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="#">
          <Image src="/images/logo.png" width={150} height={150} alt="لوگو" />
        </Link>
        <div className="hidden items-center gap-4 border-r border-gray-400 pr-3 lg:flex">
          <div className="relative">
            <Link
              href="/?toggle-desktop-categories=true"
              className="flex items-center gap-2 stroke-white/70 text-smp text-white/70 transition-all hover:stroke-white hover:text-white"
            >
              <Category size={20} />
              <span>دسته بندی ها</span>
            </Link>
            <DesktopCategories />
          </div>
          <Link
            href="#"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            هنرمندان
          </Link>
          <Link
            href="#"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            فیلم ها
          </Link>
          <Link
            href="#"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            سریال ها
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex size-11 items-center justify-center rounded-xl bg-gray-800/50 transition-all hover:bg-gray-900">
          <SearchNormal1 size={24} color="#fff" />
        </button>
        <Link
          href="#"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-800/50 px-2 transition-all hover:bg-gray-900"
        >
          <Crown size={28} color="#F5C518" variant="Bold" />

          <p className="hidden text-sm lg:block">خرید اشتراک</p>
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

const DesktopCategories = () => {
  const toggleUrlState = useToggleUrlState('desktop-categories');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(sectionRef as RefObject<HTMLElement>, () => {
    toggleUrlState.hide();
  });
  const [activedTab, setActivedTab] = useState<
    'sections' | 'movie-genres' | 'serial-genres'
  >('sections');
  const tabsData = [
    {
      key: 'sections',
      data: [
        { href: '#', text: 'لینک اول' },
        { href: '#', text: 'لینک دوم' },
        { href: '#', text: 'لینک سوم' },
        { href: '#', text: 'لینک چهارم' },
        { href: '#', text: 'لینک پنجم' },
        { href: '#', text: 'لینک ششم' },
        { href: '#', text: 'لینک هفتم' },
        { href: '#', text: 'لینک هشتم' },
        { href: '#', text: 'لینک نهم' },
        { href: '#', text: 'لینک دهم' },
      ],
    },
    {
      key: 'movie-genres',
      data: [
        { href: '#', text: 'لینک دهم' },
        { href: '#', text: 'لینک نهم' },
        { href: '#', text: 'لینک هشتم' },
        { href: '#', text: 'لینک هفتم' },
        { href: '#', text: 'لینک ششم' },
        { href: '#', text: 'لینک پنجم' },
        { href: '#', text: 'لینک چهارم' },
        { href: '#', text: 'لینک سوم' },
        { href: '#', text: 'لینک دوم' },
        { href: '#', text: 'لینک اول' },
      ],
    },
    {
      key: 'serial-genres',
      data: [
        { href: '#', text: 'لینک اول' },
        { href: '#', text: 'لینک دوم' },
        { href: '#', text: 'لینک سوم' },
        { href: '#', text: 'لینک چهارم' },
        { href: '#', text: 'لینک پنجم' },
        { href: '#', text: 'لینک ششم' },
        { href: '#', text: 'لینک هفتم' },
        { href: '#', text: 'لینک هشتم' },
        { href: '#', text: 'لینک نهم' },
        { href: '#', text: 'لینک دهم' },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={cn(
        'absolute right-0 z-20 top-10 hidden lg:flex transition-all duration-300',
        {
          'opacity-100 visible': toggleUrlState.isShow,
          'opacity-0 invisible': !toggleUrlState.isShow,
        },
      )}
    >
      <div className="h-full w-[500px] rounded-2xl bg-gray-900 p-5">
        {/* head */}
        <div className="flex">
          {[
            { key: 'sections', label: 'بخش ها' },
            { key: 'movie-genres', label: 'ژانر فیلم' },
            { key: 'serial-genres', label: 'ژانر سریال' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActivedTab(item.key as any)}
              className={cn(
                'relative top-[1px] z-20 border-b border-gray-700 flex items-center gap-3 rounded-t-xl bg-gray-900 p-4',
                {
                  'border border-b-0 border-gray-700': activedTab === item.key,
                },
              )}
            >
              <Category size={22} color="#fff" />
              <p className="text-sm">{item.label}</p>
            </button>
          ))}
        </div>
        {/* body */}
        <div>
          <div className="relative grid grid-cols-5 gap-4 rounded-b-xl border border-gray-700 p-4">
            {tabsData
              .find((item) => item.key === activedTab)
              ?.data.map((item) => (
                <Link
                  key={item.text}
                  href="#"
                  className="relative flex text-xsp transition-all hover:text-pink"
                >
                  {item.text}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
