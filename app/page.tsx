import { HeroSlider } from '@/containers/routes/home/hero-slider';
import { MostVisited } from '@/containers/routes/home/most-visited';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-8">
      <HeroSlider />
      <MostVisited />
    </div>
  );
}
