"use client";

import { useRef } from "react";
import BookCard from "./BookCard";
import { books } from "../../data/books";

export default function ChildrensBooks() {
  const bestsellingScrollRef = useRef(null);
  const browseScrollRef = useRef(null);

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

  // Filter children's books
  const childrensBooks = books.filter(book => book.genre === "Children's");

  // Split into two sections - first 6 for bestselling, rest for browse
  const bestsellingBooks = childrensBooks.slice(0, 6);
  const browseBooks = childrensBooks.slice(6);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* Bestselling Children's Books Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-green-800">Bestselling Children's Books</h2>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View all
        </a>
      </div>

      <div className="relative mb-12">
        <button
          onClick={() => scrollLeft(bestsellingScrollRef)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-custom-purple text-white p-2 rounded-full z-10 hover:bg-custom-purple/80"
        >
          &#8249;
        </button>

        <div
          ref={bestsellingScrollRef}
          className="flex overflow-x-auto gap-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bestsellingBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <button
          onClick={() => scrollRight(bestsellingScrollRef)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-custom-purple text-white p-2 rounded-full z-10 hover:bg-custom-purple/80"
        >
          &#8250;
        </button>
      </div>

      {/* Browse More Children's Books Section */}
  

       
       </div>
  );
}
