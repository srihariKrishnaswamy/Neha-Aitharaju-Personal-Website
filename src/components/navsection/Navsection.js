import React from 'react'
import Container from "react-bootstrap/Container";
import classes from './Navsection.module.css'

function Navsection() {
  return (
    <Container className={classes.nav}>
      <a href="/" className={classes.site_title}>Neha</a>
      <ul className={classes.options}>
          <li>
              <a href="#About" className={classes.option}>About</a>
          </li>
          <li>
            <a href="#experience" className={classes.option}>Work Experience</a>
          </li>
          <li>
            <a href="#projects" className={classes.option}>Projects</a>
          </li>
          <li>
            <a href="#skills" className={classes.option}>Skills</a>
          </li>
          <li>
            <a href="#resume" className={classes.option}>Resume</a>
          </li>
          <li>
            <a href="#contact" className={classes.option}>Contact</a>
          </li>
      </ul>
    </Container>
  )
}

export default Navsection