import React from "react";
// TODO: images
import placeholder from "../assets/placeholder.png";
// TODO: styles

const styles = {

};

// TODO: check links
// TODO: third party app

export default function Footer() {
  return (
            <div>
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
  )
}