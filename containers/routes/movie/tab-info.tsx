'use client';

import { useQueryState } from 'nuqs';

export function TabInfo() {
  const [activedTab] = useQueryState('tab', {
    defaultValue: 'download',
  });

  if (activedTab !== 'info') return null;

  return <section className="container">مشخصات بیشتر</section>;
}
