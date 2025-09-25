import { useState, useEffect } from 'react';

export default function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    setLoading(true);
    try {
      const response = await fetch('/api/wishlist', {
        headers: {
          'user-email': user.email,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setWishlist(data.wishlist);
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (bookId) => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      alert('Please log in to add to wishlist.');
      return;
    }

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/wishlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-email': user.email,
        },
        body: JSON.stringify({ bookId }),
      });
      if (response.ok) {
        setWishlist([...wishlist, bookId]);
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromWishlist = async (bookId) => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/wishlist/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-email': user.email,
        },
        body: JSON.stringify({ bookId }),
      });
      if (response.ok) {
        setWishlist(wishlist.filter(id => id !== bookId));
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return { wishlist, loading, addToWishlist, removeFromWishlist, refetch: fetchWishlist };
}
