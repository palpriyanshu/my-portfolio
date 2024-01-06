import {Box, Image, Link, Text, VStack} from "@chakra-ui/react";
import React from "react";
import "./Banner.scss"

const Banner = () => {
  return <section className="banner">
    <Box flex={1} display={"flex"} justifyContent={"start"}>
    <VStack padding={40} align="flex-start" className="text-section">
      <h1>Hi, my name is</h1>
      <h2> Priyanshu Pal.</h2>
      <h3>I built digital experiences.</h3>
      <Text fontSize='1xl'>I'm a software engineer specialised in building user friendly and highly efficient web and mobile applications.</Text>
      <Link className="email-link" href="mailto:chandelpriyanshuofficial@gmail.com" target="_blank" rel="noreferrer">Get In Touch!</Link>
    </VStack>
      <Image src={"/img/web-development-and-design.svg"} alt={"web-development-and-design"} boxSize={600} className="hero-image"/>
    </Box>
  </section>
}

export default Banner