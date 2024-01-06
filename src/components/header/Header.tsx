import React from "react";
import NavBar from "../navBar/NavBar";
import "./Header.scss"
import {Img, Link} from "@chakra-ui/react";

const Header = () => {
    return <header className="header">
        <div className={"logo"} tabIndex={-1}>
        <Link href={"/"} aria-label="home">
            <div className="hexagon-container">
                <Img src="/img/hexagon.svg"/>
            </div>
        </Link>
            <div className="logo-container">
                <Img src="/img/logo.svg"/>
            </div>
        </div>
        <NavBar justifyContent="flex-end"/>
    </header>
}

export default Header