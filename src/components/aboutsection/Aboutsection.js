import React from 'react';
import classes from './Aboutsection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import headshot from '../../images/headshot.png';
import appClasses from '../../App.module.css';

function Aboutsection() {
    return (
        <Fade duration={900} triggerOnce={true}>
            <section className={appClasses.section}id="About">
                <Container className={classes.aboutsection}>
                    <Row className={classes.contentrow}>
                        <Col xs={12} md={6} className={classes.imageContainer}>
                            <div className="p-md-5 p-5 d-flex justify-content-center ">
                                <img
                                    src={headshot}
                                    alt="headshot"
                                    className={classes.face}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6} className={classes.textContainer}>
                            <div>
                                <h2 className={classes.h2class}>About Me</h2>
                                <p className={classes.desctext}>
                                    Hi there! I'm Neha & I'm a third year undergrad studying Computer Science at the University of Wasington. I just wrapped up my internship at Boeing this summer,
                                    and am also passionate about teaching CS as I'm a TA for the first intro series CS course at UW, CSE 121! 

                                    I also am a full stack dev intern at the Makeability lab here at UW, helping build mapping services for those with disabilities. 
                                </p>
                                <p className={classes.desctext}>
                                    For fun, I love to dance, run, play basketball and spend time with my family. I've been dancing since I was four, and was most recently the captain of the UW Raas bollywood dance team!

                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fade>
    );
}


export default Aboutsection;