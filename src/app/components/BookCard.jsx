import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Minus } from "lucide-react";
import useWishlist from "../hooks/useWishlist";
import useBasket from "../hooks/useBasket";

export default function BookCard({ book }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { basket, addToBasket, removeFromBasket } = useBasket();
  const isWishlisted = wishlist.includes(book.id);
  const basketItem = basket.find(item => item.bookId === book.id);
  const quantity = basketItem ? basketItem.quantity : 0;

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book.id);
    }
  };

  const handleAddToBasket = async () => {
    const success = await addToBasket(book.id);
    if (success) {
      window.location.href = '/basket';
    }
  };

  const handleRemoveFromBasket = () => {
    removeFromBasket(book.id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-start min-w-[250px] relative">
      {/* Wishlist Icon */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 z-10 p-1 rounded-full hover:bg-gray-100 transition"
      >
        <Heart
          size={24}
          className={`transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
      </button>

      <Link href={`/products/${book.id}`} className="w-full flex justify-center">
        <Image
          src={book.image}
          alt={book.title}
          width={200}
          height={300}
          className="rounded-md object-cover"
        />
      </Link>

      {/* Book Info */}
      <h3 className="text-md font-semibold mt-4">{book.title}</h3>
      <p className="text-gray-600 text-sm">{book.author}</p>
      <p className="text-purple-600 font-semibold mt-1">Rating: {book.rating} &#9733;</p>
      <p className="text-black font-bold mt-2">{book.price}</p>

      {/* Green Offer Badge */}
      <p className="bg-purple-700 text-white text-xs font-semibold px-2 py-1 mt-2 rounded">
        Buy 3 Get Another Free
      </p>

      {/* Add to Basket */}
      {quantity === 0 ? (
        <button
          onClick={handleAddToBasket}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md mt-4 w-full"
        >
          Add To Basket
        </button>
      ) : (
        <div className="flex items-center justify-between mt-4 w-full">
          <button
            onClick={handleRemoveFromBasket}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-3 rounded-md"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleAddToBasket}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-3 rounded-md"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
