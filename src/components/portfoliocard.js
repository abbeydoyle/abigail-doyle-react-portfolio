import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// TODO: styles
const styles = {
      cardContainer: {
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
      },

      card: {
            width: "100%",
            height: "100%",
            background: "transparent",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      },

      cardImage: {
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            height: "10rem"
      },

      link: {
            color: "rgb(84, 81, 63)"
      },

      cardBody: {
            background: "rgb(168, 177, 150)"
      }

}

function PortfolioCard(props) {
      return (
            <Row xs={1} md={2} lg={3} style={styles.cardContainer}>
                  <>
                        {props.PortfolioInfo.map((item) => (
                              <Col className="mb-5">
                                    <Card style={styles.card} key={item.id}>
                                    <Card.Img style={styles.cardImage} variant="top" src={item.image} />
                                    <Card.Body style={styles.cardBody}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Body style={styles.cardBody} className="content d-flex justify-content-evenly align-items-end">
                                    <Card.Link style={styles.link} href={item.deployedApp} target="_blank" rel="noreferrer">
                                          Deployed Application
                                    </Card.Link>
                                    <Card.Link style={styles.link} href={item.githubRepo} target="_blank" rel="noreferrer">
                                          GitHub Repository
                                    </Card.Link>
                                    </Card.Body>
                                    </Card>
                              </Col>
                        ))}
                  </>
            </Row>
      );
}
    
export default PortfolioCard;