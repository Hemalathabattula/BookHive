import { useState, useEffect } from 'react';

export default function useBasket() {
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBasket = async () => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    setLoading(true);
    try {
      const response = await fetch('/api/basket', {
        headers: {
          'user-email': user.email,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setBasket(data.basket);
      }
    } catch (error) {
      console.error('Error fetching basket:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToBasket = async (bookId) => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      alert('Please log in to add to basket.');
      return;
    }

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/basket/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-email': user.email,
        },
        body: JSON.stringify({ bookId }),
      });
      if (response.ok) {
        const data = await response.json();
        setBasket(data.basket);
        return true;
      }
    } catch (error) {
      console.error('Error adding to basket:', error);
    }
    return false;
  };

  const removeFromBasket = async (bookId) => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/basket/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-email': user.email,
        },
        body: JSON.stringify({ bookId }),
      });
      if (response.ok) {
        const data = await response.json();
        setBasket(data.basket);
      }
    } catch (error) {
      console.error('Error removing from basket:', error);
    }
  };

  const updateBasketQuantity = async (bookId, quantity) => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/basket/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-email': user.email,
        },
        body: JSON.stringify({ bookId, quantity }),
      });
      if (response.ok) {
        const data = await response.json();
        setBasket(data.basket);
      }
    } catch (error) {
      console.error('Error updating basket quantity:', error);
    }
  };

  const checkout = async () => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      alert('Please log in to checkout.');
      return false;
    }

    const user = JSON.parse(userData);
    try {
      const response = await fetch('/api/basket/checkout', {
        method: 'POST',
        headers: {
          'user-email': user.email,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setBasket(data.basket);
        return true;
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
    return false;
  };

  useEffect(() => {
    fetchBasket();
  }, []);

  return { basket, loading, addToBasket, removeFromBasket, updateBasketQuantity, checkout, refetch: fetchBasket };
}
