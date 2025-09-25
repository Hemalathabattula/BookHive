"use client";

import { useState } from "react";
import ChildrenProducts from "../components/ChildrenProducts";
import ChildrenBooksDocument from "../components/ChildrenBooksDocument";
import Footer from "../components/Footer";

export default function ChildrenPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="font-sans min-h-screen">
      <div className="font-sans">
        <ChildrenProducts onViewMore={() => setShowDetails(!showDetails)} showDetails={showDetails} />
        {showDetails && (
          <div className="mt-16">
            <ChildrenBooksDocument />
          </div>
        )}
        <br></br>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
