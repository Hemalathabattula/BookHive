"use client";

import { useState } from "react";
import NonFictionProducts from "../components/NonFictionProducts";
import NonFictionBooksDocument from "../components/NonFictionBooksDocument";
import Footer from "../components/Footer";

export default function NonFictionPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      <div className="font-sans">
        <NonFictionProducts onViewMore={() => setShowDetails(!showDetails)} showDetails={showDetails} />
        {showDetails && (
          <div className="mt-16">
            <NonFictionBooksDocument />
          </div>
        )}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
