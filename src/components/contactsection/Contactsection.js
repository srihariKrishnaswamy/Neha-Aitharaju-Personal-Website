import React from "react";
import classes from "./Contactsection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from "../../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

function Contactsection() {
  return (
    <Fade duration={900} triggerOnce={true}>
      <section className={appClasses.section} id="contact">
        <Container className={classes.section}>
          <Row className={classes.contentrow}>
            <h2 className={classes.h2class}>Contact Me</h2>
          </Row>
          <Row className={classes.bigrow}>
            <Col>
              <Row className={classes.items}>
                <Row className={classes.experiencecontainer}>
                  <div className={classes.iconcat}>
                    <div className={classes.whitecircle}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </div>
                  <div className={classes.desctextcontainer}>
                    <p className={classes.desctext}>
                      <b>Email: </b>nehaa24@uw.edu
                    </p>
                  </div>
                </Row>
                <Row className={classes.experiencecontainer}>
                  <div className={classes.iconcat}>
                    <div className={classes.whitecircle}>
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                  </div>
                  <div className={classes.desctextcontainer}>
                    <p className={classes.desctext}>
                      <a
                        className={classes.link}
                        href="https://www.linkedin.com/in/neha-aitharaju/"
                      >
                        <b>LinkedIn</b>
                      </a>
                    </p>
                  </div>
                </Row>
              </Row>
            </Col>
            <Col className={classes.contactcol}>
              <Row className={classes.experiencecontainer}>
                <div className={classes.iconcat}>
                  <div className={classes.whitecircle}>
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                </div>
                <div className={classes.desctextcontainer}>
                  <p className={classes.desctext}>
                    <a
                      className={classes.link}
                      href="https://github.com/nehaa2426"
                    >
                      <b>GitHub</b>
                    </a>
                  </p>
                </div>
              </Row>
              <Row className={classes.experiencecontainer}>
                <div className={classes.iconcat}>
                  <div className={classes.whitecircle}>
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                </div>
                <div className={classes.desctextcontainer}>
                  <p className={classes.desctext}>
                    <a
                      className={classes.link}
                      href="https://www.instagram.com/srihari.krishnaswamy/"
                    >
                      <b>Instagram</b>
                    </a>
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
}

export default Contactsection;
