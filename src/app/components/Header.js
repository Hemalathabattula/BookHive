"use client";

import React, { useState, useEffect } from "react";
import { Search, HelpCircle, User, Heart, ShoppingCart, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FictionMenu, NonFictionMenu, ChildrenMenu, SellBooksMenu } from "./Menu";
import Banner from "./Banner";
import FictionProducts from "./FictionProducts";
import Products from "./Products";

const Header = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", searchQuery);
  };

  const router = useRouter();

  const handleMenuClick = (menu) => {
    setClickedMenu(menu);
    if (menu === "Fiction") {
      router.push("/fiction");
    } else if (menu === "Non-Fiction") {
      router.push("/non-fiction");
    } else if (menu === "Children") {
      router.push("/children");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogout(false);
  };

  return (
    <>
      {/* Header Top */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[#380379] to-[#7F55B1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BH</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">BookHive</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 flex justify-center px-4">
              <div className="w-4/5 h-20 relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full px-4 pl-14 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#7F55B1] focus:outline-none text-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400" />
              </div>
            </form>

            {/* Right Icons */}
            <div className="flex items-center space-x-6 relative">
              <div className="flex flex-col items-center text-[#6f11e2] hover:text-[#9C7BC4] cursor-pointer">
                <HelpCircle className="h-6 w-6" />
                <span className="text-xs mt-1">Help</span>
              </div>

              {!user ? (
                <Link
                  href="/account"
                  className="flex flex-col items-center text-[#6f11e2] hover:text-[#9C7BC4]"
                >
                  <User className="h-6 w-6" />
                  <span className="text-xs mt-1">Account</span>
                </Link>
              ) : (
                <div
                  className="flex flex-col items-center text-[#6f11e2] hover:text-[#9C7BC4] cursor-pointer relative"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <User className="h-6 w-6" />
                  <span className="text-xs mt-1">{user.name}</span>

                  {showLogout && (
                    <button
                      onClick={handleLogout}
                      className="absolute top-10 right-0 bg-white border shadow-md px-4 py-2 rounded-md text-sm hover:bg-gray-100"
                    >
                      <LogOut className="inline-block h-4 w-4 mr-1" /> Logout
                    </button>
                  )}
                </div>
              )}

              <Link href="/wishlist" className="flex flex-col items-center text-[#6f11e2] hover:text-[#9C7BC4]">
                <Heart className="h-6 w-6" />
                <span className="text-xs mt-1">Wishlist</span>
              </Link>
              <div className="flex flex-col items-center text-[#6f11e2] hover:text-[#9C7BC4] cursor-pointer">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-xs mt-1">Basket</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <nav className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            {["Fiction", "Non-Fiction", "Children", "Sell"].map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="font-semibold text-[#6f11e2] hover:text-[#740ff0] p-6 rounded-lg transition-colors duration-200"
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu} Books
                </button>

                {activeMenu === menu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-screen max-w-7xl bg-white shadow-xl border border-gray-200 z-50">
                    <div className="p-6">
                      {menu === "Fiction" && <FictionMenu />}
                      {menu === "Non-Fiction" && <NonFictionMenu />}
                      {menu === "Children" && <ChildrenMenu />}
                      {menu === "Sell" && <SellBooksMenu />}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Banner: Only show if NOT on /account page */}
      {/* Removed Banner here to avoid duplicate banners on homepage */}
      {/* {pathname !== "/account" && <Banner activeMenu={clickedMenu} />} */}
    </>
  );
};

export default Header;

