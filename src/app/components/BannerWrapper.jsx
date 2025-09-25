"use client";

import { usePathname } from 'next/navigation';
import Banner from './Banner';

export default function BannerWrapper() {
  const pathname = usePathname();
  const hideBannerPaths = ['/wishlist', '/basket'];

  if (hideBannerPaths.includes(pathname)) {
    return null;
  }

  return <Banner />;
}
