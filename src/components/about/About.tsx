import {Img, Stack, Text} from "@chakra-ui/react";
import React from "react";
import "./About.scss"

const About = () => {
  return <section className="about" id="about">
    <h2>About Me</h2>
    <div className="inner">
      <Stack>
      <Text>
        Hello! I'm Priyanshu Pal, an engineer at core who loves creating stuff that improves life. As a student, I was particularly fascinated by software development after seeing what a single line of code can do at scale (at that time I didn't know how much code runs behind it).
      </Text>

      <Text fontSize='1xl'>Fast-forward to career life, I was fortunate to learn programming fundamentals, teamwork and methodologies like <span className="highlight">Agile</span>, <span className="highlight">TDD</span> with the help of great mentors in <span className="highlight">STEP</span> Internship. During Internship, along with programming concepts mentors immensely focused on teamwork, soft skills and personal growth. After Internship, I have worked with both Indian and MNC clients in crowdsourcing and retail domain and helped them reach their goal with User-friendly and highly efficient Web applications.</Text>
        <Text>
          My interest in web development started back in 2020 when I joined my first real client project to develop a crowdsourcing platform — turns out it taught me a lot about <span className="highlight">HTML & CSS</span>!
        </Text>
        <Text>Here are a few technologies I’ve been working with recently:</Text>
        <ul className="skills-list">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>React-redux</li>
          <li>Node.js</li>
          <li>Sass</li>
        </ul>
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