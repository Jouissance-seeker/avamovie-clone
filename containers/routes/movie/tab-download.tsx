'use client';

import { useQueryState } from 'nuqs';

export function TabDownload() {
  const [activedTab] = useQueryState('tab', {
    defaultValue: 'download',
  });

  if (activedTab !== 'download') return null;

  return <section className="container">دانلود</section>;
}
