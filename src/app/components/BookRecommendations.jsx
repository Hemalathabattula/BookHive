"use client";

import { useRef } from "react";
import BookCard from "./BookCard";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { books } from "../../data/books";

export default function BookRecommendations({ showTitle = false, showRecentlyViewed = false }) {
  const scrollRef = useRef(null);
  const { recentlyViewed } = useRecentlyViewed();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Determine which books to show
  const displayBooks = showRecentlyViewed ? recentlyViewed : books.slice(0, 6);

  // Show message if no recently viewed books and we're showing recently viewed
  if (showRecentlyViewed && recentlyViewed.length === 0) {
    return (
      <div className="max-w-full mx-auto">
        {showTitle && (
          <h2 className="text-2xl  font-bold mb-6 text-gray-800">Your Recently Viewed:</h2>
        )}
        <p className="text-gray-600 text-center py-8">No recently viewed books yet. Start browsing to see your history here!</p>
      </div>
    );
  }

  return (
    <div className={showRecentlyViewed ? "max-w-full mx-auto" : "max-w-7xl mx-auto"}>
      {showTitle && (
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {showRecentlyViewed ? "Your Recently Viewed:" : "Bestselling Fiction Books"}
        </h2>
      )}

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8249;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
