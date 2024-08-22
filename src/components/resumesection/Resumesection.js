import React from 'react';
import classes from './Resumesection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from '../../App.module.css';

function Resumesection() {
  return (
    <Fade duration={900} triggerOnce={true}>
    <section className={appClasses.section} id="resume">
        <Container className={classes.section}>
            <Row className={classes.contentrow}>
              <h2 className={classes.h2class}>My Resume</h2>
            </Row>
            <Row>
                <p className={classes.desctext}>
                    You can access my most updated resume <a href="" className={classes.link}>here</a>
                </p>
            </Row>
        </Container>
    </section>
    </Fade>
  )
}

export default Resumesection