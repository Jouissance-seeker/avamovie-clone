import { Eye } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { MostVisitedData } from '@/resources/most-visited';

export function MostVisited() {
  return (
    <section className="container flex flex-col gap-4">
      {/* head */}
      <div className="flex gap-3">
        <Eye size={30} color="#fff" variant="TwoTone" />
        <p className="text-lg font-bold">پربازدید ترین ها</p>
      </div>
      {/* body */}
      <div className=" flex snap-x gap-4 overflow-x-auto scrollbar-hide">
        {MostVisitedData.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="flex h-fit snap-center flex-col gap-3 rounded-2xl bg-gray-900/80 px-4 pb-2 pt-4 transition-all hover:bg-gray-900"
          >
            <Image
              className="size-[150px] min-w-[150px] rounded-xl object-cover"
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
            />
            <p className="text-center text-sm text-white/90">{item.title}</p>
            <p className="text-center text-xsp text-gray-500">{item.year}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
