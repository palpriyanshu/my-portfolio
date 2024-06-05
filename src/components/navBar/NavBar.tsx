import React from "react";
import "./NavBar.scss"
import {Button, Link} from "@chakra-ui/react";

const NavBar = (props: { justifyContent: string|"start"}) => {
    const {justifyContent} = props;

  return <nav className="nav-bar hide-on-phone" style={{justifyContent:justifyContent}} role="tablist">
      <Link className="tab" type="button" role="tab" href="/#about">About</Link>
      <Link className="tab" type="button" role="tab" href="/#experience">Experience</Link>
      <button className="tab" type="button" role="tab">Work</button>
      <Link className="tab" type="button" role="tab" href="/#contact">Contact</Link>
      <Button className="resume-button">
          <Link href="/pdf/priyanshu-resume.pdf" target="_blank" rel="noreferrer">Resume</Link>
      </Button>
  </nav>
}

export default NavBar