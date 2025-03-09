import { Category, Home2, UserSquare, VideoSquare } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function Footer() {
  return (
    <footer>
      <MobileMenu />
      <MobileNavBottom />
    </footer>
  );
}

const MobileNavBottom = () => {
  return (
    <section className="fixed bottom-0 flex w-full justify-around bg-black/90 py-3 lg:hidden">
      {[
        {
          href: '/',
          icon: Home2,
          text: 'خانه',
        },
        {
          href: '/?toggle-mobile-menu=true',
          icon: Category,
          text: 'منو',
        },
        {
          href: '/',
          icon: VideoSquare,
          text: 'پخش آنلاین',
        },
        {
          href: '/',
          icon: UserSquare,
          text: 'ورود به حساب',
        },
      ].map((item) => (
        <Link
          key={item.text}
          href={item.href}
          className="flex flex-col items-center gap-2 stroke-white focus-within:stroke-pink hover:stroke-pink hover:text-pink focus:text-pink"
        >
          <item.icon size={20} />
          <p className="text-xsp">{item.text}</p>
        </Link>
      ))}
    </section>
  );
};

const MobileMenu = () => {
  const toggleUrlState = useToggleUrlState('mobile-menu');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(sectionRef as RefObject<HTMLElement>, () => {
    toggleUrlState.hide();
  });

  return (
    <section
      ref={sectionRef}
      className={cn(
        'absolute right-0 top-0 h-full w-60 bg-gray-900 lg:hidden transition-all duration-300',
        {
          'translate-x-0': toggleUrlState.isShow,
          'translate-x-60': !toggleUrlState.isShow,
        },
      )}
    >
      {/* logo */}
      <Link href="#">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto my-4"
        />
      </Link>
    </section>
  );
};
