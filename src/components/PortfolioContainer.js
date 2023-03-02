// dependencies
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./SubPages/About";
import Contact from "./SubPages/Contact";
import Portfolio from "./SubPages/Portfolio";
import Resume from "./SubPages/Resume";

// main page render, react use state for handling page change
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}