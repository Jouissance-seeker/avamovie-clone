type TMostNewestData = {
  title: string;
  isDubbed: boolean;
  isSubtitle: boolean;
  imdbRate: number;
  avamovieRate: number;
  image: string;
  description: string;
}[];

export const mostNewestData: TMostNewestData = [
  {
    title: '1923',
    isDubbed: true,
    isSubtitle: true,
    imdbRate: 8.3,
    avamovieRate: 9.2,
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/1671366588926156272.ZARFILM.jpg',
    description:
      'داتون ها در اوایل قرن بیستم با مجموعه جدیدی از چالش ها روبرو هستند، از جمله ظهور و گسترش غرب، ممنوعیت و رکود بزرگ...',
  },
  {
    title: 'Nine Bodies in A Mexican Morgue',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 6.5,
    avamovieRate: 6.5,
    image:
      'https://avamovie.shop/cdn/325x200/2025/03/Nine.Bodies.in_.A.Mexican.Morgue.AvaMovie-scaled.jpg',
    description:
      'نه غریبه که پس از تصادف هواپیمای کوچک خود ، خود را در یک جنگل از راه دور مکزیک گم می کنند. این طرح ضخیم می شود زیرا اعضای یکی یکی به قتل می رسند و بازماندگان باقیمانده باید رمز و راز را حل کنند.',
  },
  {
    title: 'Dark Winds',
    isDubbed: false,
    isSubtitle: true,
    imdbRate: 7.7,
    avamovieRate: 8.8,
    image:
      'https://avamovie.shop/cdn/325x200/2024/01/46227442910a295494dff5dbcfe43c65c0b305c56b7e593335626d32cdc19b77._RI_TTW_-e1691695583521.jpg',
    description:
      'لیفرن و چی، دو افسر پلیس ناواهو در جنوب غربی دهه 1970 را دنبال می کند که مجبور می شوند تا زمانی که به دنبال سرنخ هایی در یک پرونده قتل دوگانه می گردند، باورهای معنوی خود را به چالش بکشند...',
  },
  {
    title: 'Deli Boys',
    isDubbed: false,
    isSubtitle: false,
    imdbRate: 7.2,
    avamovieRate: 8.0,
    image:
      'https://avamovie.shop/cdn/325x200/2025/03/Deli.Boys_.AvaMovie-scaled.jpg',
    description:
      'یک جفت از برادران پاکستانی پاکستانی-آمریکایی همه چیز را از دست می دهند وقتی که ناگهان پدر بزرگان فروشگاه راحتی آنها می میرد. آنها مجبور می شوند با زندگی مخفی جرم خود در مورد جرم خود حساب کنند.',
  },
];
