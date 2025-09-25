"use client";

import Products from "./components/Products";
import BookRecommendations from "./components/BookRecommendations";
import FictionCategories from "./components/FictionCategories";
import NonFictionCategories from "./components/NonFictionCategories";
import FictionProducts from "./components/FictionProducts";
import NonFictionProducts from "./components/NonFictionProducts";
import ChildrenProducts from "./components/ChildrenProducts";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="font-sans">
        {/* Banner will automatically change based on active menu */}
        {/* <Banner /> */}
         {/* Products Section */}
        {/* <Products /> */}
        <FictionProducts />
<div className="my-12 flex justify-center">
  <div className="flex flex-col items-center">
    <img src="/images/mini-banner1.png" alt="Homepage Banner" className="w-150 h-100 rounded-lg " />
    <a href="/about" className="text-purple-700 mt-2">know more</a>
  </div>
  <div>
    <img src="/images/min-banner2.png" alt="Homepage Banner" className="w-160 h-100 rounded-lg shadow-md ml-4" />
  </div>
</div>
       

        {/* Recently Viewed Section */}
        <BookRecommendations showTitle={true} showRecentlyViewed={true} />
        {/* Removed standalone FictionCategories from homepage */}
     <NonFictionProducts />
     <div className="flex justify-center">
     <img src="/images/mini-banner3.png" alt="Homepage Banner" className="w-350 h-150 rounded-lg shadow-md my-12" />
      </div>
      
      <ChildrenProducts />
      <div className="flex justify-center text-center align-middle h-70 bg-gray-300  shadow-md my-15 p-8 " >
        <p className="text-gray-800 text-sm mt-8">
                                              The feel-good place to buy and sell books online! <br></br>
                           At BookHive, we bring you the ultimate destination for buying and selling books online!<br></br>
           Explore our massive collection of second-hand books from modern bestsellers and timeless classics to rare gems and <br></br>
           hidden treasures. With millions of preloved books at unbeatable prices, reading more for less has never been easier.

                                    Every book you buy gives a story a second life, saves money, and helps reduce waste <br></br>
                                            making your reading experience both enjoyable and sustainable.

                                           Got books you no longer need? Sell your old books through BookHive<br></br>
                               Sell Your Books and earn cash while keeping your favorite stories in circulation.

                                            Shop smarter with BookHive: incredible value, endless choice, and<br></br>
                                               a more sustainable way to enjoy the magic of reading
        </p>
      </div>


      </div>
      <Footer />
    </div>
  );
}
