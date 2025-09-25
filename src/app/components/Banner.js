"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  "/images/books.jpg",
  "/images/fictional.jpg",
  "/images/non-fictional.jpg",
  "/images/children.jpg"
];
export default function Banner() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Manual controls
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-6">
      {/* Image */}
      <Image
        src={banners[index]}
        alt={`Banner ${index + 1}`}
        width={2000}
        height={400}
        className="rounded-lg shadow-lg object-cover"
        priority
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}