"use client";

import Link from "next/link";
import Image from "next/image";

export default function NonFictionCategories() {
  const nonFictionCategories = [
    { name: 'History', image: '/images/Sapiens.webp' },
    { name: 'Science', image: '/images/why.webp' },
    { name: 'Biography', image: '/images/how.jpg' },
    { name: 'Self-Help', image: '/images/ikigai.webp' },
    { name: 'Business', image: '/images/s-h.jpg' },
    { name: 'Philosophy', image: '/images/surrounder.webp' }
  ];

  return (
    <div className="max-w-15xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-8 text-purple-900">Best Non-Fiction Books</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {nonFictionCategories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
            className="group"
          >
            <div className="text-center">
              <div className="w-68 h-68 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-white-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center overflow-hidden">
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

      {/* Link to Non-Fiction Products Page */}
      <div className="text-center mt-8">
        <Link
          href="/non-fiction"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View All Non-Fiction Books
        </Link>
      </div>
    </div>
  );
}
