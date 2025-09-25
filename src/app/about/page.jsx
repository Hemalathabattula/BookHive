"use client";

import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About BookHive</h1>
          <p className="text-lg text-gray-600">
            Your ultimate destination for buying and selling second-hand books online.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At BookHive, we believe in the power of stories and the magic of reading. Our mission is to make books accessible to everyone by providing a platform where you can buy and sell pre-loved books at unbeatable prices. We are committed to sustainability, reducing waste, and keeping the joy of reading alive for generations to come.
          </p>
          <p className="text-gray-700">
            Every book you buy from us gives a story a second life, saves money, and helps the environment. Whether you're looking for modern bestsellers, timeless classics, or rare gems, BookHive has something for every reader.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A vast collection of second-hand books across all genres</li>
            <li>Competitive prices for both buyers and sellers</li>
            <li>Easy-to-use platform for buying and selling</li>
            <li>Secure transactions and reliable delivery</li>
            <li>Community of book lovers passionate about sustainable reading</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose BookHive?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">For Buyers</h3>
              <p className="text-gray-700">
                Discover millions of pre-loved books at a fraction of the original price. From fiction to non-fiction, children's books to academic texts, find your next great read without breaking the bank.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">For Sellers</h3>
              <p className="text-gray-700">
                Turn your old books into cash! List your books for free and reach thousands of potential buyers. It's a great way to declutter your shelves and earn some extra money.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-4">
            BookHive is more than just a marketplace; it's a community of book enthusiasts who share a love for reading and sustainability. Join us in our mission to make reading more accessible and environmentally friendly.
          </p>
          <p className="text-gray-700">
            Shop smarter with BookHive: incredible value, endless choice, and a more sustainable way to enjoy the magic of reading.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
