import { TabsSwitch } from '@/containers/routes/movie/tabs-switch';
import { TopSingle } from '@/containers/routes/movie/top-single';

export default function Page() {
  return (
    <div className="flex size-full flex-col gap-6">
      <TopSingle />
      <TabsSwitch />
    </div>
  );
}
