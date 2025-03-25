import { TabComments } from '@/containers/routes/movie/tab-comments';
import { TabDownload } from '@/containers/routes/movie/tab-download';
import { TabInfo } from '@/containers/routes/movie/tab-info';
import { TabsSwitch } from '@/containers/routes/movie/tabs-switch';
import { TopSingle } from '@/containers/routes/movie/top-single';

export default function Page() {
  return (
    <div className="flex size-full flex-col gap-6">
      <TopSingle />
      <TabsSwitch />
      <div>
        <TabDownload />
        <TabInfo />
        <TabComments />
      </div>
    </div>
  );
}
