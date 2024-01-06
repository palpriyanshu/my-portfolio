import {Img, Stack, Text} from "@chakra-ui/react";
import React from "react";
import "./About.scss"

const About = () => {
  return <section className="section" id="about">
    <h2>About Me</h2>
    <div className="inner">
      <Stack>
      <Text>
        Hello! I'm Priyanshu pal, an engineer at core who loves creating stuff that improves life. As a student, I was particularly fascinated by software development after seeing what a single line of code can do at scale (at that time I didn't know how much code runs behind it).
      </Text>
      <Text fontSize='1xl'>Fast-forward to career life,and I was fortunate to learn programming fundamentals, teamwork and methodologies like Agile, TDD with the help of great mentors in <span className="highlight">STEP</span> Internship. During Internship, along with programming concepts mentors immensely focused on teamwork, soft skills and personal growth. After Internship, I have worked with multiple MNC clients in finance and transportation domain and helped them reach their goal with User-friendly and highly efficient Web applications.</Text>
      </Stack>
    <div className="my-image">
      <div className="wrapper">
        <Img src="/img/my-profile.png" alt="my-profile-picture"/>
      </div>
    </div>
    </div>
  </section>
}

export default About