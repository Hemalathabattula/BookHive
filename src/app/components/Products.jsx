"use client";

import { useRef } from "react";
import BookCard from "./BookCard";
import { books } from "../../data/books";


export default function Products() {
  const fictionScrollRef = useRef(null);
  const nonFictionScrollRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Filter fiction and non-fiction books
  const fictionBooks = books.filter(book =>
    !["History", "Science", "Biography", "Self-Help", "Business", "Philosophy"].includes(book.genre)
  );

  const nonFictionBooks = books.filter(book =>
    ["History", "Science", "Biography", "Self-Help", "Business", "Philosophy"].includes(book.genre)
  );

  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* Fiction Books Section */}
      <h2 className="text-3xl font-bold mb-8">Best Fiction Books</h2>
      <div className="relative mb-10">
        <button
          onClick={() => scrollLeft(fictionScrollRef)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8249;
        </button>

        <div
          ref={fictionScrollRef}
          className="flex overflow-x-auto gap-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {fictionBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={() => scrollRight(fictionScrollRef)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8250;
        </button>
      </div>

      {/* Non-Fiction Books Section */}
      <h2 className="text-3xl font-bold mb-8">Bestselling Non-Fiction Books</h2>
      <div className="relative">
        <button
          onClick={() => scrollLeft(nonFictionScrollRef)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8249;
        </button>

        <div
          ref={nonFictionScrollRef}
          className="flex overflow-x-auto gap-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {nonFictionBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={() => scrollRight(nonFictionScrollRef)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
