// dependencies
import React from "react";
import PortfolioCardGroup from "../PortfolioInfo";

// faux css styling
const styles = {
      header: {
            marginTop: "2rem",
            marginBottom: "2rem",
      }
};

// export container for the portfolio cards
export default function Portfolio() {
      return (
        <div className="content">
          <h2 style={styles.header}>Portfolio</h2>
          <PortfolioCardGroup />
        </div>
      );
}