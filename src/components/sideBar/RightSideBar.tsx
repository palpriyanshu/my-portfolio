import {Img, Link} from "@chakra-ui/react";
import React from "react";
import "./SideBar.scss"

const RightSideBar = () => {
    return <div className="side-bar right">
            <div className="gmail-section">
                <Link href="mailto:chandelpriyanshuofficial@gmail.com" aria-label="Gmail" target="_blank" rel="noreferrer">
                    chandelpriyanshuofficial@gmail.com
                </Link>
            </div>
    </div>
}

export default RightSideBar