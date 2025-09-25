"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Trash2 } from 'lucide-react';
import useBasket from '../hooks/useBasket';
import { books } from '../../data/books';

export default function BasketPage() {
  const { basket, removeFromBasket, updateBasketQuantity } = useBasket();
  const [basketBooks, setBasketBooks] = useState([]);

  useEffect(() => {
    const booksInBasket = basket.map(item => {
      const book = books.find(b => String(b.id) === item.bookId);
      if (book) {
        return { ...book, quantity: item.quantity };
      }
      return null;
    }).filter(book => book !== null); // Filter out any missing books
    setBasketBooks(booksInBasket);
  }, [basket]);

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromBasket(bookId);
    } else {
      updateBasketQuantity(bookId, newQuantity);
    }
  };

  const handleRemove = (bookId) => {
    removeFromBasket(bookId);
  };

  const totalPrice = basketBooks.reduce((total, book) => {
    const price = parseFloat(book.price.replace('£', ''));
    return total + (price * book.quantity);
  }, 0);

  if (basketBooks.length === 0) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-8">Your Basket</h1>
        <p className="text-gray-600">Your basket is empty.</p>
        <Link href="/" className="text-blue-600 hover:underline">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Your Basket</h1>
      <div className="grid gap-6">
        {basketBooks.map(book => (
          <div key={book.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
            <Image
              src={book.image}
              alt={book.title}
              width={80}
              height={120}
              className="rounded-md object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-purple-600 font-semibold">Rating: {book.rating} ★</p>
              <p className="text-black font-bold">{book.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(book.id, book.quantity - 1)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-2 rounded"
              >
                <Minus size={16} />
              </button>
              <span className="text-lg font-semibold w-8 text-center">{book.quantity}</span>
              <button
                onClick={() => handleQuantityChange(book.id, book.quantity + 1)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-2 rounded"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => handleRemove(book.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ml-4"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="ml-4 text-right">
              <p className="text-lg font-bold">£{(parseFloat(book.price.replace('£', '')) * book.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gray-100 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-bold">£{totalPrice.toFixed(2)}</span>
        </div>
        <Link href="/checkout">
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded w-full">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
