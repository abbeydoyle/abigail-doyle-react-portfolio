// dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import profileImage from "../../assets/profileImage.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import "../../app.css";

// faux css styling
const styles = {
  imageStyle: {
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  
  cards: {
    background: "transparent",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },

  link: {
      color: "rgb(84, 81, 63)"
  }
};

// export abput me page
// styled with bootstrap cards
export default function About() {
  return (
    <div>
      <Image
        src={profileImage}
        alt="Abigail Doyle profile image"
        style={styles.imageStyle}
        className="d-block mx-auto img-fluid"
        rounded
      />
      <h2>Abigail Doyle</h2>
      <Card style={styles.cards}>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            My name is Abbey Doyle. I'm an environmental engineer working for
            Boeing, currently in the progress of getting a Professional
            Certificate in full stack development at the University of
            Washington. After growing up in Kingsport, TN I left to get my
            bachelor's degree in Chattanooga, TN. There I studied chemical
            engineering and biology while in the Brock Scholars Program. I
            completed an undergraduate thesis while researching the
            pathogenicity of Vibrio cholerae and completed internships and the
            Center for Disease Control and Prevention and Chattem Sanofi. After
            graduating I began my career as a research chemist at the CDC
            through Battelle and worked in the Lung Injury and COVID-19
            responses. After living in Atlanta for 3 years I moved crosscountry
            to Seattle, where i reside in my current job role. In my free time I
            like to backpack, read, run, play the violin or piano, and take my
            dog to parks. Throughout my education and career I learned languages
            like: Python, MATLAB, VBA, CAD software, JS, CSS, HTML, RestFUL
            APIs, the MERN stack, object-oriented programing, etc. I became
            fascinated with all of the minor differences in softwares that make
            or break a code and love the challenges that arise when writing a
            method start to finish.
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        <h3>Hobbies</h3>
        <div className="content">
          <CardGroup>
            <Row xs={1} md={2} lg={2} style={styles.cardContainer}>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Violin</Card.Title>
                    <Card.Text>
                      I began playing the violin when I was 10 and auditioned
                      for the middle school orchestra. I have since extended a
                      formal apology and my sincerest gratitude to my family for
                      enduring those first few years of ear bleeding torment.
                      With steady practice, though, I auditioned and placed in a
                      competitive symphony in high school. We traveled
                      regionally for competitions against other high schools and
                      even played aboard a cruise ship to the Bahamas. I
                      continued to play into college with the UTC Symphony.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Reading</Card.Title>
                    <Card.Text>
                      I love to read and you can usually find me curled up on
                      the couch reading if I have the time. Unfortunately, if I
                      have a tendency to lose track of time while reading. Last
                      year I kept track of my page count for the year (2022) and
                      it was....34,617 pages. An accomplishment or an addiction?
                      I'm not interested in determining that.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Running</Card.Title>
                    <Card.Text>
                      I just ran my first half marathon in September 2021 – The
                      Great Smoky Mountains Half Marathon. If you ever have a
                      chance to run a race from Vacation Races, definitely take
                      it. Each year they put on races (5k – 100mi) in National
                      Parks. They’re beautiful. Once I ran this race, I
                      immediately decided I had to do all of their races. I’m
                      now currently training for my first ultra marathon.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Duna</Card.Title>
                    <Card.Text>
                      I just went to the shelter to look at the puppies…that’s
                      how it always goes, isn’t it? She was 2months old when I
                      got her in January 2019. I named her Duna, which is Celtic
                      for ‘little dark one’, fitting both for her looks and her
                      attitude. I lucked out in the dog department – she’s a
                      sweet girl who’s always just happy to be along for the
                      ride. She’s equally as happy laying around with me as she
                      is on our backpacking trips. She loves hiking, swimming,
                      and playing with her friends at the dog park. I’m
                      currently training her to run my next half marathon with
                      me.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      </div>
      <div>
        <h3>Volunteer Work</h3>
        <div className="content">
          <CardGroup>
            <Row xs={1} md={2} lg={2} style={styles.cardContainer}>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Digital Crisis Counselor</Card.Title>
                    <Card.Text>
                      Founded in 1998, The Trevor Project is a national
                      organization that provides crisis intervention and suicide
                      prevention to LGBTQ+ youth. With four main platforms, The
                      Trevor Project has different avenues of contact all free
                      and available 24/7. TrevorLifeline (866.488.7386) is the
                      only national crisis/suicide hotline available 24/7 for
                      LGBTQ+ youth. TrevorChat is a secure, confidential chat
                      service available through Trevor’s website that connects
                      at risk youth with trained counselors. TrevorText provides
                      young people with a trained counselor by texting START to
                      678-678. TrevorSpace is a social networking community for
                      LGBTQ youth, friends, and allies to provide peer support.
                      In addition to these platforms, The Trevor Project website
                      provides training, resources, and education to help the
                      LGBTQ community, parents, and friends with any obstacles
                      they may face. Every year, Trevor receives over 100,000
                      text, chats, or calls and educates over 22,000 with their
                      resources.As a Digital Crisis Counselor, I’m trained to
                      answer chats or texts from LGBTQ young people who reach
                      out when they are struggling with issues such as coming
                      out, LGBTQ identity, depression, and suicide. The training
                      for this included 40-hour virtual courses over the span of
                      10-weeks, including e-learning modules, role plays and
                      supervised shifts. I started volunteering with this
                      organization because one supportive person can up the
                      chances of saving a life by 30 percent. As a crisis
                      counselor for The Trevor Project, I have the opportunity
                      to listen to and validate the struggles of youth that may
                      not otherwise have an outlet. I believe everyone has a
                      right to live without fear of self-expression and to feel
                      seen and valued; volunteering for The Trevor Project
                      allows me to instill empathy and teach coping strategies
                      for self-reliance. As Dr. Wayne Dyer said, “If you change
                      the way you look at things, the things you look at
                      change.” Donations can be made <></>
                      <Card.Link
                        href="https://give.thetrevorproject.org/give/63307/#!/donation/checkout"
                        target="_blank"
                        rel="noreferrer"
                        style = {styles.link}
                      >
                        here
                      </Card.Link>
                      .
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Gardener</Card.Title>
                    <Card.Text>
                      Since humans began cutting down forests, 46% of trees have
                      been felled. Not only does this displace numerous animal
                      species, but also our pollinators as well. Birds, bees,
                      bats, and several other insects require pollinating plants
                      for homes and food and it’s estimated that this
                      pollination produces $40 billion worth of food in the US
                      alone. Without these pollinators, we’d be out of
                      everything from apples to chocolate to potatoes;
                      furthermore, they pollinate most of the food our livestock
                      eat as well. Without adequate pollination, humans and
                      animals alike would be without most of our food sources.
                      Worldwide, over half the diet of fats and oils comes from
                      crops pollinated by animals and they facilitate the
                      reproduction in 90% of the world’s flowering plants.
                      Throughout college I volunteered with the Chattanooga
                      Parks Department to plant Pollinator Patches. This is done
                      by first clearing any trash or weeds from an area safely
                      away from roads or other hazards then by planting native
                      pollinating plants. We typically used gayfeather, aster,
                      goldenrod, coneflower, or sneezeweed. Any non-invasive,
                      pollinating plants will work, especially if they require
                      full to partial sun. Occasionally, we would receive
                      flowering trees or bushes as donations that we would be
                      able to plant as well; these were beneficial as they
                      provide immediate homes to insects or small animals
                      without needing to wait through the growth period.
                      Typically we would spend about 4-5 hours on Saturdays
                      clearing the area and installing these patches. Now,
                      anytime I go back to Chattanooga, I’m able to drive past
                      them and see how far they’ve come and what wildlife
                      animals have a new home. Installing these patches has
                      helped me feel like every little bit matters – especially
                      as I go by them and am greeted by beautiful flowers and
                      pollinators.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Seamstress</Card.Title>
                    <Card.Text>
                      Research has shown that pregnancy increases a woman’s risk
                      of homelessness and vice versa – that homeless women are
                      more likely to become pregnant than housed women. In fact,
                      homeless families make up approximately 40% of the
                      homeless population on any given night. The Lantern at
                      Morning Pointe is an assisted living facility caring for
                      those with Alzheimers and dementia whose residents made a
                      goal to create no sew baby blankets each month for
                      donation to local homeless shelters. This enables the
                      residents to work with their fine motor skills and spend
                      time with one another as they work towards a goal.Morning
                      Pointe encourages the community around them participate
                      and will donate any baby blankets dropped off to the
                      facility. As someone who’s always needed to keep busy
                      (even while watching a movie) I appreciate small tasks to
                      do that help give back as well. I enjoyed picking out
                      matching fabrics and making these baby blankets, either
                      while watching a movie at home or while spending time with
                      the residents of Morning Pointe who were doing the same.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title>Dog Trainer & Adoption Specialist</Card.Title>
                    <Card.Text>
                      Approximately 6.5 million companion animals enter U.S.
                      animal shelters nationwide every year and approximately
                      1.5 million shelter animals are euthanized. Unfortunately,
                      about 30 percent of the animals in shelters are left there
                      by their owners, typically due to aggressive behavior or
                      animals growing larger than anticipated. This leads to
                      approximately half of all rehomed pets being abandoned at
                      shelters. I believe this is completely preventable through
                      proper training and owner education. I began volunteering
                      at animal shelters in 2012 at TCGC in Kingsport, TN,
                      working adoption events on the weekends. While there, I
                      helped almost 100 dogs and cats get adopted (one to my own
                      family). After moving to Chattanooga, TN for college I
                      volunteered for the SPCA of Chattanooga, where I kept the
                      animal areas sanitary, completed evening feedings, and
                      worked with reactive dogs in preparation for adoption
                      events. Volunteering with these shelters made feel like
                      part of a solution – instead of just letting reactive or
                      depressed dogs waste away in a shelter, we worked with
                      them constantly to rehabilitate them into a more docile
                      and obedient temperament through reward training. Before
                      setting up the final adoption papers, I compiled lists of
                      average sizing, temperament, potential health issues, and
                      fixes for common behavioral issues. I would then go over
                      all of this with potential owners to ensure they had a
                      realistic expectations in order to decrease the risk of
                      any pets being returned. Many of these stray dogs had few
                      positive interactions with people, so seeing them go from
                      timid or aggressive to cuddled up on a couch wearing a
                      sweater with their new family was incredibly rewarding and
                      worth every second.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}
