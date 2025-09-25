"use client";

import { useRecentlyViewed } from '../hooks/useRecentlyViewed';
import BookCard from './BookCard';

export default function RecentlyViewed() {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4 text-custom-purple">Recently Viewed</h2>
        <p className="text-gray-600">No recently viewed books yet. Start browsing to see your history here!</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-custom-purple">Recently Viewed</h2>
        <button
          onClick={clearRecentlyViewed}
          className="bg-custom-purple hover:bg-custom-purple/80 text-white px-4 py-2 rounded-md transition"
        >
          Clear History
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyViewed.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
