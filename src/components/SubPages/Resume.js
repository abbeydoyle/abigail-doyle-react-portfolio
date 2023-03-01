import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import "../../app.css";

const styles = {
  cards: {
    background: "transparent",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },

  link: {
    color: "rgb(84, 81, 63)",
  },
  columns: {

  }
};

// TODO: resume
export default function Resume() {
  return (
    <div>
      <h2 className="mb-2">Resume</h2>
      <Card style={styles.cards}>
        <Card.Body>
          <Card.Title>Personal Profile</Card.Title>
          <Card.Text>
          Inquisitive software engineer with a background in chemical and environmental engineering. Past experience in automation engineering as a software programmer provided inspiration to pursue a Professional Certificate in Full Stack Development. Experience leading research laboratories and interdepartmental project teams awarded leadership, time management, conflict resolution, and collaborative skills. Member of Tau Beta Pi. Currently looking for a return to software programming and design systems.
          </Card.Text>
        </Card.Body>
      </Card>

      <h3>Recent Career History</h3>
        <div className="content">
          <CardGroup>
            <Row style={styles.cardContainer}>
                <Card style={styles.cards} className="mb-3">
                  <Card.Body>
                    <Card.Title className="mb-3">Boeing |  Environmental Engineer | Environmental Health and Safety (February 2022 – Present)</Card.Title>
                    <Card.Text>
                        - Internally audit chain of custody practices
                    </Card.Text>
                    <Card.Text>
                        - Create queries within Access databases to profile hazardous waste designations to ensure safe practices and regulatory compliance
                    </Card.Text>
                    <Card.Text>
                        - Routinely create required permit reports to the appropriate agency for environmental, health, and safety standards
                    </Card.Text>
                    <Card.Text>
                        - Act as the point of contact for agency interactions with organizations such as EPA, Department of Ecology, Department of Transportation, and local and federal government organizations
                    </Card.Text>
                    <Card.Text>
                        - Evaluate and monitor hazardous waste and industrial wastewater disposal
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={styles.cards} className="mb-3">
                  <Card.Body>
                    <Card.Title className="mb-3">Center for Disease Control and Prevention | Chemical Engineer | Emergency Response Branch (July 2019 – February 2022)</Card.Title>
                    <Card.Text>
                        - Accepted and prepared all specimen for analysis in the multi-branch 2019 Lung Injury Response 
                    </Card.Text>
                    <Card.Text>
                        - Created a liquid handling automation program for COVID-19 response sample aliquots
                    </Card.Text>
                    <Card.Text>
                        - Completed proficiency testing programs, emergency responses, and sample logistic exercises
                    </Card.Text>
                    <Card.Text>
                        - Managed inventory, material handling, and branch shipments
                    </Card.Text>
                    <Card.Text>
                        - Aided research deadlines by meeting data analysis goals by providing efficient, timely, and accurate support via laboratory and sample preparation services
                    </Card.Text>
                    <Card.Text>
                        - Received passing CLIA (Clinical Laboratory Improvement Amendments) lab accreditation required to test human specimens for health assessment or to diagnose, prevent, or treat disease
                    </Card.Text>
                    <Card.Text>
                        - Coordinated work with maintenance support groups working in the lab to insure they work in a safe efficient manner and ensured that all safety permits were completed, and that workers were aware of hazards in the lab
                    </Card.Text>
                    <Card.Text>
                        - Created automation programs for Hamilton pipetting devices to decrease processing time for emergency preparedness protocols
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={styles.cards} className="mb-3">
                  <Card.Body>
                    <Card.Title className="mb-3">Sanofi | Validation Engineer | Chattem Chemicals (August 2018 – May 2019)</Card.Title>
                    <Card.Text>
                        - Maintained strict product development timelines to meet consumer product release dates
                    </Card.Text>
                    <Card.Text>
                        - Developed protocols and standard operating procedures for product development
                    </Card.Text>
                    <Card.Text>
                        - Trained to validate new manufacturing and packaging processes, write protocols, and design cleaning procedures
                    </Card.Text>
                    <Card.Text>
                        - Conducted weekly DI water testing to insure contaminated water does not come in contact with industry processes while generating manufacturing reports
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Row>
          </CardGroup>
        </div>


        <div>
        <h3>Education</h3>
        <div className="content d-flex justify-content-evenly">
          <CardGroup>
            <Row xs={1} md={3} lg={3} style={styles.cardContainer}>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title className="mb-3">University of Washington</Card.Title>
                    <Card.Text>
                      Professional Certificate
                    </Card.Text>
                    <Card.Text>
                      Full Stack Development
                    </Card.Text>
                    <Card.Text>
                        Progressive Web Application Development
                    </Card.Text>
                    <Card.Text>
                    September 2022 - March 2023
                    </Card.Text>
                    <Card.Text>
                    Grade: 100.76
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
                <Card style={styles.cards}>
                  <Card.Body>
                    <Card.Title className="mb-3">University of Tennessee at Chattanooga</Card.Title>
                    <Card.Text>
                      Bachelor's Degree
                    </Card.Text>
                    <Card.Text>
                      Major: Chemical Engineering
                    </Card.Text>
                    <Card.Text>
                        Minor: Biology
                    </Card.Text>
                    <Card.Text>
                    August 2015 – May 2019
                    </Card.Text>
                    <Card.Text>
                    177 earned hours, GPA: 3.763 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3" style={styles.columns}>
                <Card style={styles.cards}>
                  <Card.Body>
                  <Card.Title className="mb-3">Dobyns-Bennett High School</Card.Title>
                    <Card.Text>
                      Highschool Diploma
                    </Card.Text>
                    <Card.Text>
                      History, English, Spanish AP Courses
                    </Card.Text>
                    <Card.Text>
                      Science and Math AP Courses
                    </Card.Text>
                    <Card.Text>
                      August 2011- May 2015
                    </Card.Text>
                    <Card.Text>
                        GPA: 3.758
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
