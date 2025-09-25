"use client";

import { useRef } from "react";
import Link from "next/link";
import BookCard from "./BookCard";
import { books } from "../../data/books";
import ChildrenCategories from "./ChildrenCategories";
import { usePathname } from "next/navigation";

export default function ChildrenProducts({ onViewMore, showDetails }) {
  const scrollRef = useRef(null);
  const pathname = usePathname();

  

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

  // Filter children books
  const childrenBooks = books.filter(book =>
    book.genre === "Children"
  );

  return (
    <div className="max-w-15xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900">Bestselling Children Books</h2>
        <Link
          href="/childrenbookdocument"
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
          {childrenBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        >
          &#8250;
        </button>
        <ChildrenCategories/>
      </div>
    </div>
  );
}
