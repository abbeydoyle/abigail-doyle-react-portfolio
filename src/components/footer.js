import React from "react";

// TODO: styles

const styles = {

};

// TODO: images
import placeholder from "../assets/placeholder.png";

// TODO: check links
// TODO: third party app
const Footer = () => {
      return (
            <div style={styles.footer}>
              <div>
                <a href="https://github.com/abbeydoyle" target="_blank" rel="noreferrer">
                  <img src={placeholder} alt="GitHub Logo" height="50px" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/abbeydoyle/" target="_blank" rel="noreferrer">
                  <img src={placeholder} alt="LinkedIn Logo" height="50px" />
                </a>
              </div>
            </div>
      );
}

export default Footer