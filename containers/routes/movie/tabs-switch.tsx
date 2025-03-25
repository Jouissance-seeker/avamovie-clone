'use client';

import { DocumentDownload, InfoCircle, MessageText1 } from 'iconsax-react';
import { useQueryState } from 'nuqs';
import { cn } from '@/utils/cn';

export function TabsSwitch() {
  const [activedTab, setActivedTab] = useQueryState('tab', {
    defaultValue: 'download',
  });

  return (
    <section className="border-b border-white/20 bg-gray-900/80">
      <div className="container flex gap-3">
        {[
          { id: 'download', label: 'دانلود', icon: DocumentDownload },
          { id: 'info', label: 'اطلاعات بیشتر', icon: InfoCircle },
          { id: 'comments', label: 'دیدگاه ها', icon: MessageText1 },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActivedTab(item.id)}
            className={cn(
              'flex items-center border-b transition-all px-2 border-transparent py-4 gap-1.5',
              {
                'border-b-pink': activedTab === item.id,
              },
            )}
          >
            <item.icon
              size={24}
              className={cn('fill-gray-400 transition-all', {
                'fill-pink': activedTab === item.id,
              })}
              variant="Bulk"
            />
            <span className="text-sm text-white/70">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
