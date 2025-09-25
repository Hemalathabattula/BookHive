"use client";

import { useState } from "react";
import FictionProducts from "../components/FictionProducts";
import FictionBooksDocument from "../components/FictionBooksDocument";
import Footer from "../components/Footer";

export default function FictionPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      <div className="font-sans">
        <FictionProducts onViewMore={() => setShowDetails(!showDetails)} showDetails={showDetails} />
        {showDetails && (
          <div className="mt-16">
            <FictionBooksDocument />
          </div>
        )}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
