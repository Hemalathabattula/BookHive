"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function FictionCategories() {
  const fictionCategories = [
    { name: 'Fantasy', image: '/images/the-white-tiger.jfif' },
    { name: 'Modern Fiction', image: '/images/the-storied-life.jpg' },
    { name: 'Romance', image: '/images/romantics.jfif' },
    { name: 'Thriller & Suspense', image: '/images/serious-men.jfif' },
    { name: 'Adventure Books', image: '/images/the-authenticity-project.jpg' },
    { name: 'Classic Fiction', image: '/images/fictional.jpg' }
  ];

  return (
    <div className="max-w-15xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-8 text-purple-900">Browse Fiction books</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {fictionCategories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
            className="group"
          >
            <div className="text-center">
              <div className="w-68 h-68 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-200 to-white-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={180}
                    height={180}
                    className=" object-cover w-35 h-50"
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-purple-800 group-hover:text-blue-600 transition-colors leading-tight">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Link to Fiction Products Page */}
      <div className="text-center mt-8">
        <Link
          href="/fiction"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Fiction Books
        </Link>
      </div>
    </div>
  );
}
