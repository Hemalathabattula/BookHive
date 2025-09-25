"use client";

import BookCard from '../components/BookCard';
import { books } from '../../data/books';
import useWishlist from '../hooks/useWishlist';

export default function WishlistPage() {
  const { wishlist, loading } = useWishlist();

  const wishlistedBooks = books.filter(book => wishlist.includes(String(book.id)));

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!localStorage.getItem('user')) {
    return <div className="text-center py-10">Please log in to view your wishlist.</div>;
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {wishlistedBooks.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
