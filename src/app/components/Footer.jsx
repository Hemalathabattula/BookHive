import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-wrap justify-between border-b border-purple-700 pb-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">BookHive sells used books online to over 190 countries worldwide.</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="bg-purple-800 p-2 rounded hover:bg-purple-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-purple-800 p-2 rounded hover:bg-purple-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="bg-purple-800 p-2 rounded hover:bg-purple-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3v12a3 3 0 003 3 3 3 0 003-3V7h3V3h-9z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="bg-purple-800 p-2 rounded hover:bg-purple-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.8 12.8 0 013 4.15a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 013 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z"/></svg>
              </a>
            </div>
            <button className="border border-purple-700 rounded px-4 py-2 hover:bg-purple-700 transition">IN / £ GBP</button>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">BookHive</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="underline hover:text-purple-300">About Us</Link></li>
              <li><a href="#" className="underline hover:text-purple-300">World of Books Foundation</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Top Authors</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Wholesale Books</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Careers</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Impact Report</a></li>
              <li><a href="#" className="underline hover:text-purple-300">World of Books +Plus</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline hover:text-purple-300">Shipping</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Returns & Refunds</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Help Center</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Chat With Us</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Condition Guide</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Cookies</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Sitemap</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h4 className="font-bold mb-4">Rare Books</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline hover:text-purple-300">About Old & Rare Books</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Rare Book Conditions</a></li>
              <li><a href="#" className="underline hover:text-purple-300">Book Care Guide</a></li>
            </ul>
          </div>
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full flex items-center space-x-2">
              <svg xmlns="http://www.bv.org/2000/svg" className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
              <span>Follow on shop</span>
            </button>
          </div>
        </div>

        <div className="pt-6 text-center text-xs border-t border-purple-700">
          <p>
            © 2025, BookHive |{" "}
            <a href="#" className="underline hover:text-purple-300">Privacy Notice</a> |{" "}
            <a href="#" className="underline hover:text-purple-300">Terms and Conditions</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
