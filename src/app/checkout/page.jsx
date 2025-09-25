"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useBasket from '../hooks/useBasket';
import { books } from '../../data/books';

export default function CheckoutPage() {
  const { basket, checkout } = useBasket();
  const [basketBooks, setBasketBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const booksInBasket = basket.map(item => {
      const book = books.find(b => String(b.id) === item.bookId);
      if (book) {
        return { ...book, quantity: item.quantity };
      }
      return null;
    }).filter(book => book !== null);
    setBasketBooks(booksInBasket);
  }, [basket]);

  const totalPrice = basketBooks.reduce((total, book) => {
    const price = parseFloat(book.price.replace('£', ''));
    return total + (price * book.quantity);
  }, 0);

  const handleCheckout = async () => {
    setLoading(true);
    const success = await checkout();
    setLoading(false);
    if (success) {
      alert('Order placed successfully!');
      router.push('/');
    } else {
      alert('Checkout failed. Please try again.');
    }
  };

  if (basketBooks.length === 0) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <p className="text-gray-600">Your basket is empty.</p>
        <Link href="/" className="text-blue-600 hover:underline">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid gap-6 mb-8">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        {basketBooks.map(book => (
          <div key={book.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
            <Image
              src={book.image}
              alt={book.title}
              width={60}
              height={90}
              className="rounded-md object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-black font-bold">{book.price} x {book.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">£{(parseFloat(book.price.replace('£', '')) * book.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-bold">£{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded w-full"
      >
        {loading ? 'Processing...' : 'Confirm Order'}
      </button>
    </div>
  );
}
