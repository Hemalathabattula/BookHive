"use client";

import Link from "next/link";
import Image from "next/image";

export default function ChildrensCategories() {
  const childrensCategories = [
    { name: 'Picture Books', image: '/images/children.jpg' },
    { name: 'Early Readers', image: '/images/children.jpg' },
    { name: 'Chapter Books', image: '/images/children.jpg' },
    { name: 'Classic Stories', image: '/images/children.jpg' },
    { name: 'Educational', image: '/images/children.jpg' },
    { name: 'Adventure Stories', image: '/images/children.jpg' }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-8 text-green-800">Browse Children's Books</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {childrensCategories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors leading-tight">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Link to Children's Books Page */}
      <div className="text-center mt-8">
        <Link
          href="/childrens-books"
          className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: '#6f11e2' }}
        >
          View All Children's Books
        </Link>
      </div>
    </div>
  );
}
