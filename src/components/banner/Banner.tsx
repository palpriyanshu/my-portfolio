import {Stack, Text} from "@chakra-ui/react";
import React from "react";
import "./About.css"
const Hero = () => {
  return <section className="section">
    <Stack spacing={3}>
      <Text fontSize='6xl'>Welcome to my portal</Text>
      <Text fontSize='2xl'>I'm</Text>
      <Text fontSize='5xl'>Priyanshu Pal</Text>
    </Stack>
  </section>
}

export default Hero