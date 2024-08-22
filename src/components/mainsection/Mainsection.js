import React, { useState, useEffect } from 'react';
import classes from './Mainsection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

function Mainsection() {
  const phrases = ['Student', 'Software Engineer', 'Dance Captain', 'Teaching Assistant'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [typing, setTyping] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const phrase = phrases[currentPhraseIndex];
      const char = phrase[currentCharIndex];

      if (char) {
        setTyping(prevTyping => prevTyping + char);
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentCharIndex(0);
          setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
          setTyping('');
        }, 1500); // Delay before starting the next phrase
      }
    }, 50); // Delay between typing each character

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, currentCharIndex]);

  return (
    <Container className={classes.mainsection}>
      <Fade duration={900} triggerOnce>
        <Row>
          <Col className={classes.bigtextcol}>
            <h3 className={classes.h3class}>Hi I'm</h3>
            <h1 className={classes.h1class}>Neha</h1>
            <div className={classes.movingtextcontainer}>
              <p className={classes.subtext}>I'm a</p>
              <span className={classes.movingtext}>{typing}</span>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default Mainsection;