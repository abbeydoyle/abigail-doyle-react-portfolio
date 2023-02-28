import React from "react";
import PortfolioCardGroup from "../PortfolioInfo";

// TODO: style
const styles = {
      header: {
            marginTop: "2rem",
            marginBottom: "2rem",
      }
    };

export default function Portfolio() {
      return (
        <div className="content">
          <h2 style={styles.header}>Portfolio</h2>
          <PortfolioCardGroup />
        </div>
      );
}