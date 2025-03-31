import { Microphone2, Star1, Subtitle } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { singleMovieData } from '@/resources/single';
import { cn } from '@/utils/cn';

export function TopSingle() {
  const data = singleMovieData;
  return (
    <section className="relative flex flex-col items-center gap-4 pt-24 lg:flex-row lg:pb-12 lg:pt-32">
      <div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(${data.bg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      </div>
      <div className="container z-10 flex flex-col items-center lg:flex-row lg:items-start lg:gap-5">
        <div className="relative w-[250px]">
          <Image
            src={data.image}
            alt={data.title.en}
            width={250}
            height={300}
            className="relative rounded-xl"
          />
          <div className="absolute left-1.5 top-1.5 flex gap-1.5">
            <div
              className={cn(
                'size-[24px] rounded-full flex justify-center items-center bg-gray-800/80',
                {
                  hidden: !data.isSubtitle,
                },
              )}
            >
              <Subtitle size={14} color="#ffffff" variant="Bold" />
            </div>
            <div
              className={cn(
                'size-[24px] rounded-full flex justify-center items-center bg-gray-800/80',
                {
                  hidden: !data.isDubbed,
                },
              )}
            >
              <Microphone2 size={16} color="#ffffff" variant="Bold" />
            </div>
          </div>
        </div>
        <div className="z-10 mt-3 flex flex-col items-center gap-2 lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-4">
          <div className="flex flex-col items-center gap-2 lg:mt-3 lg:items-start lg:gap-3">
            <h1 className="relative text-center text-2xl font-bold text-white">
              {data.title.en}
            </h1>
            <p className="text-xsp text-white/70">{data.title.fa}</p>
            <p className="pt-1 text-xsp text-white/70">
              ژانر:{' '}
              {data.genres
                .map((item) => (
                  <Link
                    href={item.href}
                    key={item.text}
                    className="transition-all hover:text-pink"
                  >
                    {item.text}
                  </Link>
                ))
                .reduce((prev, curr) => [prev, ', ', curr] as any)}
            </p>
            <p className="my-2 text-center text-xsp text-white/70 lg:text-start">
              {data.description}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1" dir="ltr">
              {[...Array(10)].map((_, index) => (
                <Star1
                  key={index}
                  size={15}
                  color={index < 7 ? '#FFD700' : '#ffffff'}
                  variant="Bold"
                />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-10">
              <div className="flex flex-col items-center gap-1.5 text-sm">
                <Image
                  src="/images/ava-movie-rate.png"
                  alt="imdb"
                  width={30}
                  height={20}
                />
                <span className="pt-1  text-sm text-gray-300">
                  <span className="font-medium">{data.rates.avamovie}</span>
                  <span>/10</span>
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-sm">
                <Image
                  src="/images/imdb-rate.png"
                  alt="imdb"
                  width={40}
                  height={30}
                />
                <span className="pt-1  text-sm text-gray-300">
                  <span className="font-medium">{data.rates.imdb}</span>
                  <span>/10</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
