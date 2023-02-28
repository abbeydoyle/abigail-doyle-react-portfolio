import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./SubPages/About";
import Contact from "./SubPages/Contact";
import Portfolio from "./SubPages/Portfolio";
import Resume from "./SubPages/Resume";

// TODO: styles

const styles = {

};

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
    <div style={styles.card}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}