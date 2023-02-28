import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// TODO: styles
const styles = {
      cardContainer: {
            display: "flex",
            justifyContent: "center",
      },

      card: {
            width: "100%",
            height: "100%",
      },

      cardImage: {
            height: "10rem"
      },

      
}

function PortfolioCard(props) {
      return (
            <Row xs={1} md={2} lg={3} style={styles.cardContainer}>
                  <>
                        {props.PortfolioInfo.map((item) => (
                              <Col className="mb-3">
                                    <Card style={styles.card} key={item.id}>
                                    <Card.Img style={styles.cardImage} variant="top" src={item.image} />
                                    <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                    <Card.Link href={item.deployedApp} target="_blank" rel="noreferrer">
                                          Deployed Application
                                    </Card.Link>
                                    <Card.Link href={item.githubRepo} target="_blank" rel="noreferrer">
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