import React from "react";
import "./Work.scss"
import {Card, CardBody, CardFooter, CardHeader, HStack, Img, Link, VStack} from "@chakra-ui/react";

const Work = () => {
    return <section className="work" id="work">
            <h2>My Pet Projects</h2>
        <VStack>
            <div className="card">
                <div className="my-image left">
                    <div className="wrapper">
                        <img src="./img/my-portfolio.png" alt="Portfolio Image"/>
                    </div>
                </div>
                <div>
                    <h3>My Portfolio</h3>
                    <ul  className="skills-list">
                        <li>Typescript</li>
                        <li>React</li>
                        <li>Chakra UI</li>
                        <li>Vercel</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div>
                    <h3>Solar System</h3>
                    <ul  className="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SVG</li>
                    </ul>
                </div>
                <div className="my-image right">
                    <div className="wrapper">
                        <img src="./img/solar-system.png" alt="Solar system Image"/>
                    </div>
                </div>
            </div>
        </VStack>
    </section>
}

export default Work