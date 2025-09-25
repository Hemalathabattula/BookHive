"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { books } from "../../../data/books";
import { useState, useEffect } from "react";
import BookRecommendations from "../../components/BookRecommendations";
import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";

export default function ProductDetail() {
  const params = useParams();
  const book = books.find((b) => b.id === parseInt(params.id));
  const { addToRecentlyViewed } = useRecentlyViewed();

  const [selectedCondition, setSelectedCondition] = useState("Very Good");

  // Add book to recently viewed when component mounts
  useEffect(() => {
    if (book) {
      addToRecentlyViewed(book);
    }
  }, [book, addToRecentlyViewed]);

  if (!book) {
    return <p className="p-10">Book not found.</p>;
  }

  const conditions = [
    { name: "Very Good", price: "£3.90", deal: "Deal!" },
    { name: "Good", price: "£3.90", deal: "Deal!" },
    { name: "Well Read", price: "£3.90", deal: "Deal!" },
    { name: "New", price: "£9.49" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:underline">HOME</Link>  
        <Link href="/" className="hover:underline">ROOT</Link> 
        <Link href="/" className="hover:underline">BOOK</Link> 
        <Link href="/" className="hover:underline">FICTION BOOKS</Link>  
        <Link href="/" className="hover:underline">MODERN FICTION</Link> 
        <span className="text-gray-800">{book.title.toUpperCase()}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image */}
        <div className="relative">
          <Image
            src={book.image}
            alt={book.title}
            width={300}
            height={450}
            className="rounded-lg object-cover"
          />
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            Buy 3 Get<br />Another Free
          </div>
          <p className="text-sm text-purple-600 mt-2">
            <Link href="#" className="underline">Click to look inside</Link> 🔍
          </p>
        </div>

        {/* Book Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-xl text-gray-600 mt-2">by {book.author}</p>
          <p className="text-2xl font-bold mt-4">{book.price}</p>
          <p className="text-gray-600 mt-2">Condition - Very Good</p>
          <p className="text-gray-600">40+ In stock</p>

          <div className="mt-4">
            <p className="font-semibold mb-2">Select Condition</p>
            <div className="flex gap-2">
              {conditions.map((condition) => (
                <button
                  key={condition.name}
                  onClick={() => setSelectedCondition(condition.name)}
                  className={`px-4 py-2 border rounded ${
                    selectedCondition === condition.name
                      ? "bg-purple-300"
                      : "bg-purple-400 hover:bg-gray-100"
                  }`}
                >
                  {condition.name}<br />
                  {condition.price}
                  {condition.deal && <span className="text-purple-600 text-xs">{condition.deal}</span>}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md mt-6 w-full">
            Add To Basket
          </button>

          <div className="mt-6">
            <Link href="/products" className="text-purple-600 underline">
              ← Back to Products
            </Link>
          </div>
        </div>

        {/* World of Books */}
        <div className="w-64">
          <h3 className="font-bold text-lg">World of Books</h3>
          <p className="text-gray-700 mt-2">
            At World of Books, you'll find millions of preloved reads at great prices, from bestsellers to hidden gems. Every book you buy saves money and helps reduce waste, so you can read more for less while giving stories a second life.
          </p>
          <ul className="mt-2 text-gray-700 text-sm">
            <li>• The feel-good place to buy books</li>
            <li>• Free UK delivery over £5</li>
            <li>• 10% off preloved books when you join +Plus</li>
            <li>• Buying preloved emits 46% less CO2 than new</li>
            <li>• Give your books a new home - sell them back to us!</li>
          </ul>
          <div className="bg-purple-600 text-white text-center py-2 mt-4 rounded">
            Special Offer<br />
            Buy 3, Get Another Free on Millions of Preloved Books!!
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">{book.title} Summary</h2>
        <p className="text-gray-700">{book.title} by {book.author}</p>
        <p className="text-gray-700 mt-2">{book.summary}</p>
      </div>

      {/* Book Recommendations - Enhanced Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">You Might Also Like</h2>
        <BookRecommendations />
      </div>
    </div>
  );
}
