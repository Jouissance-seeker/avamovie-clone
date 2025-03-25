'use client';

import { useQueryState } from 'nuqs';

export function TabComments() {
  const [activedTab] = useQueryState('tab', {
    defaultValue: 'download',
  });

  if (activedTab !== 'comments') return null;

  return <section className="container">نظرات</section>;
}
