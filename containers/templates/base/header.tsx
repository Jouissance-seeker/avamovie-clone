'use client';

import { Category, CloseSquare, Crown, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function Header() {
  const toggleUrlState = useToggleUrlState('desktop-categories');

  return (
    <header className="container absolute left-1/2 top-0 z-20 my-6 flex -translate-x-1/2 items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/images/logo.png" width={150} height={150} alt="لوگو" />
        </Link>
        <div className="hidden items-center gap-4 border-r border-gray-400 pr-3 lg:flex">
          <div className="relative">
            <button
              onClick={() => toggleUrlState.show()}
              className="flex items-center gap-2 stroke-white/70 text-smp text-white/70 transition-all hover:stroke-white hover:text-white"
            >
              <Category size={20} />
              <span>دسته بندی ها</span>
            </button>
            <DesktopCategories />
          </div>
          <Link
            href="/"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            هنرمندان
          </Link>
          <Link
            href="/"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            فیلم ها
          </Link>
          <Link
            href="/"
            className="text-smp text-white/70 transition-all hover:text-white"
          >
            سریال ها
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SearchNormal />
        <Link
          href="/"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-800/50 px-2 backdrop-blur-sm transition-all hover:bg-gray-900"
        >
          <Crown size={28} color="#F5C518" variant="Bold" />

          <p className="hidden text-sm lg:block">خرید اشتراک</p>
        </Link>
        <Link
          href="/"
          className="hidden h-11 items-center justify-center rounded-xl bg-pink px-6 transition-all hover:bg-pink/90 lg:flex"
        >
          ورود
        </Link>
      </div>
    </header>
  );
}

const SearchNormal = () => {
  const toggleUrlState = useToggleUrlState('search-normal');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  useOnClickOutside(sectionRef as RefObject<HTMLElement>, () => {
    toggleUrlState.hide();
    setSearchValue('');
  });

  return (
    <div ref={sectionRef} className="relative">
      {/* btn */}
      <button
        onClick={() => toggleUrlState.show()}
        className={cn(
          'flex size-11 z-20 relative items-center justify-center rounded-xl bg-gray-800/50 transition-all hover:bg-gray-900',
          {
            hidden: toggleUrlState.isShow,
          },
        )}
      >
        <SearchNormal1 size={24} color="#fff" />
      </button>
      <div
        className={cn(
          'absolute flex gap-1 -bottom-5 backdrop-blur-sm left-0 z-10 h-11 bg-gray-800/50 rounded-xl p-2',
          {
            'bottom-0 left-7 w-0 opacity-0 invisible': !toggleUrlState.isShow,
            '-bottom-5 w-60 opacity-100 visible': toggleUrlState.isShow,
          },
        )}
      >
        {/* search */}
        <button
          onClick={() => {
            router.push(`/explore?text=${searchValue}`);
          }}
        >
          <SearchNormal1 size={24} color="#fff" />
        </button>
        {/* input */}
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="size-full bg-transparent text-smp text-white/70 outline-none placeholder:text-sm"
          placeholder="جستجو"
        />
        {/* close */}
        <button
          onClick={() => {
            toggleUrlState.hide();
          }}
        >
          <CloseSquare
            size="28"
            className="absolute -right-8 top-2 stroke-white transition-all hover:stroke-pink"
          />
        </button>
      </div>
    </div>
  );
};

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
        { href: '/', text: 'لینک اول' },
        { href: '/', text: 'لینک دوم' },
        { href: '/', text: 'لینک سوم' },
      ],
    },
    {
      key: 'movie-genres',
      data: [
        { href: '/', text: 'لینک سوم' },
        { href: '/', text: 'لینک دوم' },
        { href: '/', text: 'لینک اول' },
      ],
    },
    {
      key: 'serial-genres',
      data: [
        { href: '/', text: 'لینک اول' },
        { href: '/', text: 'لینک دوم' },
        { href: '/', text: 'لینک سوم' },
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
                  href="/"
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
