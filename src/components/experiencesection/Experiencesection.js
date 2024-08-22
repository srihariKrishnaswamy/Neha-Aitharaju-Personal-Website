import React from "react";
import classes from "./Experiencesection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";

function Experiencesection() {
  return (
    <Fade duration={900} triggerOnce={true}>
      <section className={appClasses.section} id="experience">
        <Container className={classes.section}>
          <Row className={classes.contentrow}>
            <h2 className={classes.h2class}>Work Experience</h2>
          </Row>
          <Row className={classes.experiencecontainer}>
            <p className={classes.desctext}>
              <b>Software Engineering Intern | Boeing | June 2024 – Present</b>
            </p>
            <p className={classes.desctext}>
              I'm currently developing a web-based catalog for the Boeing
              Software Factory. I'm excited to be planning the deployment of the
              web app to a Kubernetes cluster using a custom-built Docker
              container, a custom Helm chart, and automating the process with
              GitLab CI.
            </p>
          </Row>
          <Row className={classes.experiencecontainer}>
            <p className={classes.desctext}>
              <b>
                Research Intern | Makeability Labs | Project Sidewalk | April
                2024 – Present
              </b>
            </p>
            <p className={classes.desctext}>
              I'm maintaining and enhancing the Project Sidewalk API and web
              application, which helps improve the tracking and updating of
              accessibility issues in urban infrastructure. I'm working with
              Scala on the backend and using a PostgreSQL database.
            </p>
            <p className={classes.desctext}>
              I also respond to tickets regularly, addressing bugs and
              implementing optimizations to make the codebase and frontend UI/UX
              components even better, ensuring a smooth experience for our 10,000 +
              users.
            </p>
          </Row>
          <Row className={classes.experiencecontainer}>
            <p className={classes.desctext}>
              <b>
                CSE 12X Teaching Assistant | Paul G. Allen School of Computer
                Science | September 2024
              </b>
            </p>
            <p className={classes.desctext}>
              I facilitate weekly review sessions for over 20 students, covering
              essential topics like Data Structures, Linked Lists, Recursion,
              and Binary Trees in Java. It's rewarding to see students grasp
              these concepts!
            </p>
            <p className={classes.desctext}>
              I also evaluate and grade homework assignments and projects,
              aiming to provide clear, constructive feedback that supports each
              student's learning journey.
            </p>
          </Row>
          <Row className={classes.experiencecontainer}>
            <p className={classes.desctext}>
              <b>
                Data Analyst Intern | Infinite Sum Modeling | June 2023 – August
                2023
              </b>
            </p>
            <p className={classes.desctext}>
              During my time here, I researched the sustainability of palm oil
              importation in the EU and Australia, offering insights in areas
              like macroeconomic analysis, economic modeling, climate policy,
              and trade policy.
            </p>
            <p className={classes.desctext}>
              I also focused on predictive maintenance for operational
              efficiency and sustainable practices, using historical data. With
              the ARIMA model, I identified trends and helped predict when
              systems might need maintenance.
            </p>
          </Row>
          <Row className={classes.experiencecontainer}>
            <p className={classes.desctext}>
              <b>
                Accessibility Research Assistant | Paul G. Allen School of
                Computer Science | February 2023 – February 2024
              </b>
            </p>
            <p className={classes.desctext}>
              I had the chance to work on a research paper alongside a PhD
              candidate and an undergraduate, exploring how sonification can
              enhance accessibility for screen-reader users interacting with
              online data visualizations.
            </p>
            <p className={classes.desctext}>
              We're excited to have submitted the paper to the Assets for 2025
              Accessibility Conference!
            </p>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Experiencesection;
