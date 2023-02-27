import React from "react";
import PortfolioCard from "./PortfolioCard";
import CardGroup from "react-bootstrap/CardGroup";

// TODO: add real images
import card1Image from "../assets/placeholder.png";
import card2Image from "../assets/placeholder.png";
import card3Image from "../assets/placeholder.png";
import card4Image from "../assets/placeholder.png";
import card5Image from "../assets/placeholder.png";
import card6Image from "../assets/placeholder.png";

const PortfolioInfo = [
      {
            id: "1",
            title: "A Day in the Leaf",
            description: "This project uses Node.js and Express.js to create a RESTful api, Handlebars.js as a templating engine, MySQL and the Sequelize ORM for a server-side database, and the Cron utility as an automated task scheduler. These programs and dependencies were implemented to create a plant care app that allows the user to track the watering schedule, light exposure, and other health concerns specified by the user for multiple plants",
            deployedApp: "https://a-day-in-the-leaf.herokuapp.com",
            githubRepo: "https://github.com/mtownsend509/A-Day-in-the-Leaf",
            image: "card1Image",
      },
      {
            id: "2",
            title: "Movie Moodboard",
            description: "This project uses html, css, javascript, two third-party APIs to create movie and tv show recommendations based on user input.",
            deployedApp: "https://abbeydoyle.github.io/movie-moodboard/",
            githubRepo: "https://github.com/abbeydoyle/movie-moodboard",
            image: "card2Image",
      },
      {
            id: "3",
            title: "Team Profile Generator",
            description: "This project uses npm, inquirer, fs, jest, and javascript to generate a Team Portfolio Page with user input. All input is given within the terminal using Inquirer, a command line interface for Node.js. With user input, the portfolio page has custom color themes.",
            deployedApp: "https://github.com/abbeydoyle/team-profile-generator.git",
            githubRepo: "https://github.com/abbeydoyle/team-profile-generator",
            image: "card3Image",
      },
      {
            id: "4",
            title: "ReadMe Generator",
            description: "A terminal-based interface that creates a project ReadME based on user input.",
            deployedApp: "https://github.com/abbeydoyle/readme-generator.git",
            githubRepo: "https://github.com/abbeydoyle/readme-generator",
            image: "card4Image",
      },
      {
            id: "5",
            title: "SQL Employee Tracker",
            description: "This project uses npm, inquirer, fs, sql, and javascript to generate an employee tracker database with user input. ",
            deployedApp: "https://github.com/abbeydoyle/sql-employee-tracker.git",
            githubRepo: "https://github.com/abbeydoyle/sql-employee-tracker",
            image: "card5Image",
      },
      {
            id: "6",
            title: "Front End Portfolio",
            description: "The first portfolio I've made, showing how far I've come as a developer.",
            deployedApp: "https://abbeydoyle.github.io/module-two-challenge/",
            githubRepo: "https://github.com/abbeydoyle/module-two-challenge",
            image: "card6Image",
      }
];

function PortfolioCardGroup() {
      return (
            <CardGroup>
              <PortfolioCard portfolioInfo= {portfolioInfo} />
            </CardGroup>
      );
}

export default PortfolioCardGroup