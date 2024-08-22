import React from "react";
import classes from "./Projectsection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";

function Projectsection() {
  return (
    <Fade duration={900} triggerOnce={true}>
      <section className={appClasses.section} id="projects">
        <Container className={classes.section}>
          <Row className={classes.contentrow}>
            <h2 className={classes.h2class}>Projects</h2>
            <h4 className={classes.h4class}>Feel free to click on one!</h4>
          </Row>
          <a href="https://github.com/nehaa2426/party-paradise">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>Party Paradise | Music Playing System</b>
              </p>
              <p className={classes.desctext}>
                Developed a full-stack music website with authentication,
                separate host and guest views, and pagination features using
                JavaScript. Implemented the frontend interface using React and
                MUI, managed by NPM. The backend was developed using the Django
                framework and Python to run the web server. Integrated the
                Spotify Web API for authentication, retrieving Spotify data, and
                interacting with playback features like skipping and seeking to
                a position in a song.
              </p>
            </Row>
          </a>
          <div className={classes.paddingspace} />
          <a href="https://github.com/nehaa2426/employee-tracker-app">
            <Row className={classes.experiencecontainer}>
              <p className={classes.desctext}>
                <b>StaffHub | Organization App</b>
              </p>
              <p className={classes.desctext}>
                Utilized Flutter to create an app that tracks employees,
                calendars, and expenditures. Built using Dart and JavaScript,
                the backend uses a non-relational database, Google Firestore.
                Firebase Authentication allows users to create accounts and
                store data in Firestore collections.
              </p>
            </Row>
          </a>
        </Container>
      </section>
    </Fade>
  );
}

export default Projectsection;
