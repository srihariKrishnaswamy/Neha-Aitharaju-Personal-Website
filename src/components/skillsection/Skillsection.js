import React from 'react';
import classes from './Skillsection.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import appClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { faComputer, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faSprayCan } from '@fortawesome/free-solid-svg-icons';


function Skillsection() {
  return (
    <Fade duration={900} triggerOnce={true}>
    <section className={appClasses.section} id="skills">
        <Container className={classes.section}>
            <Row className={classes.contentrow}>
              <h2 className={classes.h2class}>Skills</h2>
            </Row>
            <Row className={classes.items}>
                <Row className={classes.experiencecontainer}>
                        <div className={classes.iconcat}>
                            <div className={classes.whitecircle}>
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                        </div>
                        <div className={classes.desctextcontainer}>
                            <p className={classes.desctext}><b>Languages: </b>Python, Java, SQL, JavaScript, Dart, HTML, CSS</p>
                        </div>
                </Row>
                <Row className={classes.experiencecontainer}>
                        <div className={classes.iconcat}>
                            <div className={classes.whitecircle}>
                                <FontAwesomeIcon icon={faComputer} />
                            </div>
                        </div>
                        <div className={classes.desctextcontainer}>
                            <p className={classes.desctext}><b>Databases: </b>PostgreSQL, MySQL, Google Firebase</p>
                        </div>
                </Row>
                <Row className={classes.experiencecontainer}>
                        <div className={classes.iconcat}>
                            <div className={classes.whitecircle}>
                                <FontAwesomeIcon icon={faLaptop} />
                            </div>
                        </div>
                        <div className={classes.desctextcontainer}>
                            <p className={classes.desctext}><b>Fullstack frameworks </b>React, Angular, Flutter, Node, Express, Django</p>
                        </div>
                </Row>
                <Row className={classes.experiencecontainer}>
                        <div className={classes.iconcat}>
                            <div className={classes.whitecircle}>
                                <FontAwesomeIcon icon={faRobot} />
                            </div>
                        </div>
                        <div className={classes.desctextcontainer}>
                            <p className={classes.desctext}><b>Machine Learning: </b>PyTorch, Pandas, PyTorch, Numpy</p>
                        </div>
                </Row>
                <Row className={classes.experiencecontainer}>
                        <div className={classes.iconcat}>
                            <div className={classes.whitecircle}>
                                <FontAwesomeIcon icon={faSprayCan} />
                            </div>
                        </div>
                        <div className={classes.desctextcontainer}>
                            <p className={classes.desctext}><b>Misc: </b>Docker, Kubernetes, Azure</p>
                        </div>
                </Row>
            </Row>
        </Container>
    </section>
    </Fade>
  )
}

export default Skillsection