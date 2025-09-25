"use client";

import React, { createContext, useState, useEffect, useCallback, useContext } from "react";

const RECENTLY_VIEWED_KEY = "recentlyViewedBooks";
const MAX_RECENTLY_VIEWED = 6;

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRecentlyViewed(parsed);
      } catch (error) {
        console.error("Error parsing recently viewed books:", error);
        setRecentlyViewed([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = useCallback((book) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((b) => b.id !== book.id);
      const updated = [book, ...filtered];
      return updated.slice(0, MAX_RECENTLY_VIEWED);
    });
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewed([]);
  }, []);

  return (
    <RecentlyViewedContext.Provider
      value={{ recentlyViewed, addToRecentlyViewed, clearRecentlyViewed }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewedContext = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error("useRecentlyViewedContext must be used within a RecentlyViewedProvider");
  }
  return context;
};
