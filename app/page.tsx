import { HeroSlider } from '@/containers/routes/home/hero-slider';
import { MostControversial } from '@/containers/routes/home/most-controversial';
import { MostNewest } from '@/containers/routes/home/most-newest';
import { MostVisited } from '@/containers/routes/home/most-visited';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-6">
      <HeroSlider />
      <MostControversial />
      <MostNewest />
      <MostVisited />
    </div>
  );
}
