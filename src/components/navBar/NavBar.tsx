import React from "react";
import "./NavBar.scss"
import {Button, Link} from "@chakra-ui/react";

const NavBar = (props: { justifyContent: string|"start"}) => {
    const {justifyContent} = props;

  return <nav className="nav-bar" style={{justifyContent:justifyContent}} role="tablist">
      <Link className="tab" type="button" role="tab" href="/#about">About</Link>
      <button className="tab" type="button" role="tab">Experience</button>
      <button className="tab" type="button" role="tab">Work</button>
      <button className="tab" type="button" role="tab">Contact</button>
      <Button className="resume-button">Resume</Button>
  </nav>
}

export default NavBar