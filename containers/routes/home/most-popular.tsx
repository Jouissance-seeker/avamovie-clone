import { Clock, Microphone2, Subtitle } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { mostPopularData } from '@/resources/most-popular';
import { cn } from '@/utils/cn';

export function MostPopular() {
  return (
    <section className="container flex flex-col gap-4">
      {/* head */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Clock size={30} color="#fff" variant="TwoTone" />
          <p className="text-lg font-bold">محبوب ترین ها</p>
        </div>
        <Link
          href="/"
          className="rounded-xl border border-gray-800 bg-gray-900 px-3 py-2.5 text-center text-sm transition-all hover:border-pink hover:text-pink"
        >
          مشاهده بیشتر
        </Link>
      </div>
      {/* body */}
      <div className="flex snap-x gap-4 overflow-x-auto lg:grid lg:snap-none lg:grid-cols-4 lg:justify-between">
        {mostPopularData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

interface ICardProps {
  data: (typeof mostPopularData)[0];
}

const Card = (props: ICardProps) => {
  return (
    <Link
      href="/"
      key={props.data.id}
      className="group flex h-fit snap-center flex-col gap-3 rounded-2xl bg-gray-900/80 px-4 pb-2 pt-4 transition-all hover:bg-gray-900"
    >
      <div className="relative flex flex-col items-end gap-1">
        <Image
          className="h-[160px] w-[280px] min-w-[280px] rounded-xl object-cover brightness-90 transition-all group-hover:brightness-50 lg:size-auto lg:h-[160px] lg:min-w-full"
          src={props.data.image}
          alt={props.data.title}
          width={260}
          height={160}
        />
        <p className="mt-2 line-clamp-1 text-smp font-medium text-white/90">
          {props.data.title}
        </p>
        <div className="pointer-events-none absolute top-[45px] flex w-full items-center opacity-0 transition-all group-hover:opacity-100">
          <p className="absolute flex h-full px-3 text-xs font-medium text-white/90">
            {props.data.description}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="pt-1 text-gray-300">
              <span className="font-medium">{props.data.imdbRate}</span>
              <span>/10</span>
            </span>
            <Image
              src="/images/ava-movie-rate.png"
              alt="imdb"
              width={25}
              height={20}
            />
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <span className="pt-1 text-gray-300">
              <span className="font-medium">{props.data.imdbRate}</span>
              <span>/10</span>
            </span>
            <Image
              src="/images/imdb-rate.png"
              alt="imdb"
              width={25}
              height={20}
            />
          </div>
        </div>
        <div className="absolute right-1.5 top-1.5 flex gap-1.5">
          <div
            className={cn(
              'size-[24px] rounded-full flex justify-center items-center bg-gray-800/80',
              {
                hidden: !props.data.isSubtitle,
              },
            )}
          >
            <Subtitle size={14} color="#ffffff" variant="Bold" />
          </div>
          <div
            className={cn(
              'size-[24px] rounded-full flex justify-center items-center bg-gray-800/80',
              {
                hidden: !props.data.isDubbed,
              },
            )}
          >
            <Microphone2 size={16} color="#ffffff" variant="Bold" />
          </div>
        </div>
      </div>
    </Link>
  );
};
