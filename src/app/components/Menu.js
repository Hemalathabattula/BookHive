// src/components/Menu.js
import { useState } from "react";

export function FictionMenu() {
  return (
    <div className="w-full bg-white p-6 shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Category */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Category</h3>
          <ul className="space-y-1 text-gray-700">
            <li>All Fiction Books</li>
            <li>Crime & Mystery</li>
            <li>Fantasy</li>
            <li>Modern Fiction</li>
            <li>Romance</li>
            <li>Adventure</li>
            <li>Thriller & Suspense</li>
            <li>Classic Fiction</li>
            
          </ul>
        </div>

          <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]"></h3>
          <ul className="space-y-1 text-gray-700">
           
            <li>Erotic Fiction</li>
            <li>Fiction-Related Items</li>
            <li>Anthologies & Short Stories</li>
            <li>Graphic Novels</li>
            <li>Historical Fiction</li>
            <li>Horror & Ghost Stories</li>
            <li>Religious & Spiritual Fiction</li>
            <li>Sagas</li>
            <li>Science Fiction</li>
          </ul>
        </div>

        {/* Column 2: Special Features */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Special Features</h3>
          <ul className="space-y-1 text-gray-700">
            <li>🔥 Trending Books</li>
            <li>📚 New Fiction Books</li>
            <li>🏆 Booker Prize Winners</li>
            <li>🖤 Celebrate Black Authors</li>
            <li>📚 Fiction Books of the Month</li>
            <li>🏳️‍🌈 LGBTQ+ Shelf</li>
          </ul>
        </div>

        {/* Column 3: Top Authors */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Top Authors</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Stephen King</li>
            <li>Agatha Christie</li>
            <li>Sarah J Maas</li>
            <li>Colleen Hoover</li>
          </ul>
        </div>

        {/* Column 4: Additional Categories */}
      
      </div>
    </div>
  );
}

export function NonFictionMenu() {
  return (
    <div className="w-full bg-white p-6 shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Category */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Category</h3>
          <ul className="space-y-1 text-gray-700">
            <li>All Non-Fiction Books</li>
            <li>Biography & True Stories</li>
            <li>English Language Teaching</li>
            <li>Health & Personal Development</li>
            <li>Lifestyle, Cooking & Leisure</li>
            <li>Reference Books</li>
          </ul>
        </div>

        {/* Column 2: Special Features */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Special Features</h3>
          <ul className="space-y-1 text-gray-700">
            <li>📚 New Non-Fiction Books</li>
            <li>🔥 Non-Fiction Books of the Month</li>
            <li>💚 Health & Fitness</li>
            <li>🍳 Cookery & Recipe</li>
            <li>🏆 International Booker Prize</li>
          </ul>
        </div>

        {/* Column 3: Broaden Your Knowledge */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Broaden Your Knowledge</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Music</li>
            <li>Arts & Crafts</li>
            <li>Learn A Language</li>
            <li>Noteworthy</li>
            <li>Sustainability</li>
            <li>Veggie cookbooks</li>
            <li>Mind, Body & Spirit</li>
            <li>Travel</li>
            <li>Quizzes & Games</li>
            <li>Politics & Governance</li>
          </ul>
        </div>

        {/* Column 4: Top Authors */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Top Authors</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Various Non-Fiction Authors</li>
            <li>Popular Non-Fiction Writers</li>
            <li>Educational Authors</li>
            <li>Self-Help Experts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ChildrenMenu() {
  return (
    <div className="w-full bg-white p-6 shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Category */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Category</h3>
          <ul className="space-y-1 text-gray-700">
            <li>All Children's Books</li>
            <li>Children's Fiction & True Stories</li>
            <li>Children's Non-Fiction</li>
            <li>Activity, Early Learning & Picture Books</li>
            <li>Children's Reference Books</li>
            <li>Children's Education & Learning</li>
            <li>Children's Poetry & Anthologies</li>
            <li>Children's Personal & Social Issues</li>
            <li>Stationary & Miscellaneous Items</li>
          </ul>
        </div>

        {/* Column 2: Special Features */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Special Features</h3>
          <ul className="space-y-1 text-gray-700">
            <li>🔥 New Arrivals</li>
            <li>📚 Children's Books of the Month</li>
            <li>🍎 Back to School</li>
            <li>💚 Kids' Favourite Characters</li>
            <li>💙 Kids' Favourite Series</li>
          </ul>
        </div>

        {/* Column 3: Top Authors */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">Top Authors</h3>
          <ul className="space-y-1 text-gray-700">
            <li>David Walliams</li>
            <li>Julia Donaldson</li>
            <li>Tom Fletcher</li>
            <li>Roald Dahl</li>
          </ul>
        </div>

        {/* Column 4: YA Authors */}
        <div>
          <h3 className="font-semibold mb-2 text-[#6f11e2]">YA Authors</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Alice Oseman</li>
            <li>Holly Jackson</li>
            <li>Karen M. McManus</li>
            <li>Jennifer Lynn Barnes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SellBooksMenu() {
  return (
    <div className="w-full bg-white p-6 shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-6 text-[#6f11e2]">Sell Your Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-4">
          <p className="text-gray-700 text-center py-8">
            Information about selling your books goes here. This section can be expanded with selling guidelines, pricing information, and submission forms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="w-full">
      <FictionMenu />
      <NonFictionMenu />
      <ChildrenMenu />
      <SellBooksMenu />
    </div>
  );
}
