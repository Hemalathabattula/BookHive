"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookCard from "./BookCard";
import { books } from "../../data/books";
import NonFictionCategories from "./NonFictionCategories";
import Banner from "./Banner";

export default function NonFictionProducts({ onViewMore, showDetails }) {
  const scrollRef = useRef(null);
  const pathname = usePathname();
  const [clickedMenu, setClickedMenu] = useState(null);

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

  // Filter non-fiction books
  const nonFictionBooks = books.filter(book =>
    ["History", "Science", "Biography", "Self-Help", "Business", "Philosophy"].includes(book.genre)
  );

  return (
    <div className="max-w-15xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900">Bestselling Non-Fiction Books</h2>
        <Link
          href="/non-fictionbookdocument"
          className="text-purple-600 hover:text-purple-800 font-medium text-lg underline"
        >
          View Details
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8249;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {nonFictionBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8250;
        </button>
        <NonFictionCategories/>
      </div>
    </div>
    
  );
}
