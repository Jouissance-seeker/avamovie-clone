'use client';

import {
  Calendar,
  Clock,
  Global,
  LanguageSquare,
  UserSquare,
} from 'iconsax-react';
import { useQueryState } from 'nuqs';

export function TabInfo() {
  const [activedTab] = useQueryState('tab', {
    defaultValue: 'download',
  });

  if (activedTab !== 'info') return null;

  const data = [
    {
      icon: Global,
      key: 'محصول',
      value: 'United States',
    },
    {
      icon: LanguageSquare,
      key: 'زبان',
      value: 'English',
    },
    {
      icon: Calendar,
      key: 'تاریخ انتشار',
      value: '2023',
    },
    {
      icon: Clock,
      key: 'مدت زمان',
      value: '۶۰ دقیقه',
    },
    {
      icon: Global,
      key: 'رده سنی',
      value: 'PG-13',
    },
    {
      icon: UserSquare,
      key: 'کارگردان',
      value: 'John Doe',
    },
  ];

  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl bg-gray-900/80 p-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <item.icon size={23} className="stroke-pink" />
              <p className="text-sm font-medium text-white/90">{item.key}</p>
            </div>
            <p className="text-sm font-medium text-white/90">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
