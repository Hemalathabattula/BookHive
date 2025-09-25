"use client";

import { useRecentlyViewedContext } from "../context/RecentlyViewedContext";

export function useRecentlyViewed() {
  return useRecentlyViewedContext();
}
