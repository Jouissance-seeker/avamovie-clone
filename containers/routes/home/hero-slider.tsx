'use client';

import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSliderData } from '@/resources/hero-slider';
import { cn } from '@/utils/cn';

export function HeroSlider() {
  const swiperRef = useRef<any>(null);
  const [activedIndex, setActivedIndex] = useState(0);
  const [activedIndexData, setActivedIndexData] = useState(HeroSliderData[0]);
  const handleSlideChange = (e: any) => {
    const newIndex = e.realIndex;
    setActivedIndex(newIndex);
    setActivedIndexData(HeroSliderData[newIndex]);
  };
  const handleClickImage = (e: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(e);
    }
  };

  return (
    <section
      className="relative z-10 col-span-full flex h-[500px] flex-col justify-end overflow-hidden bg-cover bg-center lg:h-[600px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${activedIndexData.href})`,
      }}
    >
      {/* movie detail */}
      <div className="container mt-14 flex h-full flex-col justify-center gap-2 p-4">
        <h1 className="text-xl font-medium text-white lg:text-3xl">
          {activedIndexData.title}
        </h1>
        <div className="h-[1px] w-14 !bg-pink" />
        <div className="flex items-center gap-2">
          <span>
            <span className="text-lg font-medium">{activedIndexData.imdb}</span>
            <span>/10</span>
          </span>
          <Image src="/images/imdb.png" alt="imdb" width={40} height={40} />
        </div>
        <p className="max-w-[700px] text-sm text-white/80">
          {activedIndexData.description}
        </p>
        <Link
          href={activedIndexData.href}
          className="mt-4 flex h-11 w-fit items-center justify-center rounded-xl bg-pink px-6 transition-all hover:bg-pink/90"
        >
          تماشا
        </Link>
      </div>
      {/* slider */}
      <div className="flex">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          centeredSlides
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          onSlideChangeTransitionEnd={handleSlideChange}
          modules={[Autoplay]}
          loop
          className="container mb-1 w-fit"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {HeroSliderData.map((item, index) => (
            <SwiperSlide key={item.title} className="!w-[180px] rounded-lg">
              <button
                onClick={() => handleClickImage(index)}
                className={cn(
                  'rounded-xl relative overflow-hidden border transition-all duration-300',
                  {
                    'border-pink': activedIndex === index,
                    'border-transparent': activedIndex !== index,
                  },
                )}
              >
                <Image
                  src={item.href}
                  alt={item.title}
                  width={180}
                  height={100}
                  className="brightness-[0.6]"
                />
                <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-2 text-center text-smp text-white">
                  {item.title}
                </p>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
