type TMostPopularData = {
  id: number;
  title: string;
  isDubbed: boolean;
  isSubtitle: boolean;
  imdbRate: number;
  avamovieRate: number;
  image: string;
  description: string;
  href: string;
}[];

export const mostPopularData: TMostPopularData = [
  {
    id: 1,
    title: '1923',
    isDubbed: true,
    isSubtitle: true,
    imdbRate: 8.3,
    avamovieRate: 9.2,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/1671366588926156272.ZARFILM.jpg',
    description:
      'داتون ها در اوایل قرن بیستم با مجموعه جدیدی از چالش ها روبرو هستند، از جمله ظهور و گسترش غرب، ممنوعیت و رکود بزرگ...',
  },
  {
    id: 2,
    title: 'Nine Bodies in A Mexican Morgue',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 6.5,
    avamovieRate: 6.5,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2025/03/Nine.Bodies.in_.A.Mexican.Morgue.AvaMovie-scaled.jpg',
    description:
      'نه غریبه که پس از تصادف هواپیمای کوچک خود ، خود را در یک جنگل از راه دور مکزیک گم می کنند. این طرح ضخیم می شود زیرا اعضای یکی یکی به قتل می رسند و بازماندگان باقیمانده باید رمز و راز را حل کنند.',
  },
  {
    id: 3,
    title: 'Dark Winds',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 7.7,
    avamovieRate: 8.8,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/46227442910a295494dff5dbcfe43c65c0b305c56b7e593335626d32cdc19b77._RI_TTW_-e1691695583521.jpg',
    description:
      'لیفرن و چی، دو افسر پلیس ناواهو در جنوب غربی دهه 1970 را دنبال می کند که مجبور می شوند تا زمانی که به دنبال سرنخ هایی در یک پرونده قتل دوگانه می گردند، باورهای معنوی خود را به چالش بکشند...',
  },
  {
    id: 4,
    title: 'Daredevil: Born Again',
    isDubbed: true,
    isSubtitle: true,
    imdbRate: 8.7,
    avamovieRate: 9.1,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2025/03/Daredevil.Born_.Again_.AvaMovie-scaled.jpg',
    description:
      'داستان سریال درباره شخصیتی با نام مت مورداک می باشد، کسی که در کودکی بینایی خود را از دست داد اما در عوض حواس خارق العاده ای را به دست آورد.',
  },
  {
    id: 5,
    title: 'The Handmaid Tale',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 8.3,
    avamovieRate: 8.6,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/sokTOq0zAmPS7wCR4qd4Kca35x7-scaled-1.jpg',
    description:
      'سریال «سرگذشت ندیمه» داستان «گیلیاد» (Gilead) را روایت می‌کند، جامعه‌ای که قبلاً بخشی از ایالات متحده بوده و اکنون به استقلال رسیده است.',
  },
  {
    id: 6,
    title: 'The Hunting Party',
    isDubbed: true,
    isSubtitle: true,
    imdbRate: 6.5,
    avamovieRate: 8.3,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2025/01/The.Hunting.Party_.AvaMovie-scaled.jpg',
    description:
      'داستان تیمی تحقیقاتی که باید خطرناک‌ترین قاتلان را دستگیر کنند، قاتلانی که...',
  },
  {
    id: 7,
    title: 'Family Guys',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 8.1,
    avamovieRate: 9.5,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/16554710481929798613.ZARFILM.jpg',
    description:
      'داستان این سریال انیمشن حول خانواده‌ای خیالی به نام خانوادهٔ گریفن می گذرد که در شهر خیالی کوهاگ در رود آیلند زندگی می‌کنند…',
  },
  {
    id: 8,
    title: 'Suits LA',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 5.5,
    avamovieRate: 7.7,
    href: '/movie/simple',
    image:
      'https://avamovie.shop/cdn/325x200/2025/02/Suits.LA_.AvaMovie-scaled.jpg',
    description:
      'گروه جدیدی را به رهبری تد بلک ، دادستان سابق نیویورک که یک موسسه حقوقی L.A را بنا کرده است که متخصص در قانون جنایی و سرگرمی است ، دنبال می کند.',
  },
];
