type TSignleMovieData = {
  image: string;
  bg: string;
  isDubbed: boolean;
  isSubtitle: boolean;
  title: {
    en: string;
    fa: string;
  };
  description: string;
  rates: {
    imdb: number;
    avamovie: number;
    users: number;
  };
  genres: {
    text: string;
    href: string;
  }[];
};

export const singleMovieData: TSignleMovieData = {
  image:
    'https://avamovie.shop/cdn/300x450/2025/02/MV5BYWRlNWYzMjgtMzVkNy00OWNkLTliMWQtNjAwZDE4NzEwNTFmXkEyXkFqcGc@._V1_SX500.jpg',
  bg: 'https://avamovie.shop/wp-content/uploads/2025/02/Grosse.Pointe.Garden.Society.AvaMovie-1024x576.jpg',
  isDubbed: true,
  isSubtitle: true,
  title: {
    en: 'Grosse Pointe Garden Society',
    fa: 'جامعه باغ گروس پوینت',
  },
  description:
    'چهار عضو یک باشگاه باغ حومه را دنبال می کند ، زیرا آنها در تلاش برای شکوفایی در قتل و بدبختی قرار می گیرند.',
  rates: {
    imdb: 6.5,
    avamovie: 7.5,
    users: 7,
  },
  genres: [
    {
      text: 'درام',
      href: '/',
    },
    {
      text: 'معمایی',
      href: '/',
    },
    {
      text: 'هیجان انگیز',
      href: '/',
    },
  ],
};
