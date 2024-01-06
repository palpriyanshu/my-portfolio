import {Img, Link} from "@chakra-ui/react";
import React from "react";
import "./SideBar.scss"

const LeftSideBar = () => {
    return <div className="side-bar left">
        <ul className="nav-links">
            <li>
                <Link href="https://github.com/palpriyanshu" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <Img src="/img/github-icon.svg" alt="github-icon"/>
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/priyanshu-9a5b1120a/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                    <Img src="/img/linkedIn-icon.svg" alt="linkedIn-icon"/>
                </Link>
            </li>
        </ul>
    </div>
}

export default LeftSideBar