import React from "react";
import "./Experience.scss"

const Experience = () => {
  return <section className="experience" id="experience">
    <h2>Clients I've Worked With <span className="company highlight">&nbsp;@&nbsp;<a href="https://www.thoughtworks.com/en-in" className="inline-link" rel="noopener noreferrer" target="_blank">Thoughtworks</a></span></h2>
    <div className="inner">
      <div className="job-detail">
        <div id="panel-0" role="tabpanel" tabIndex={0} className="job" >
          <button id="tab-0" role="tab" tabIndex={0} className="job-duration"><span>Feb 2022 - Present</span></button>
          <div>
              <h3><span>Software Engineer</span><span className="company highlight">&nbsp;@&nbsp;<a href="https://www.metroag.de/en" className="inline-link" rel="noopener noreferrer" target="_blank">Metro AG</a></span></h3>
              <ul>
                <li>Worked on existing internal web application which allows metro employees to </li>
                <li>Rewrote jquery in frontend using React and Next.js for a cleaner and more stable product</li>
                <li>Worked on existing Node.js backend to add new features</li>
                <li>Contributed to all aspects of the product including creating user stories, building React UI, developing backend features, and running applications in circle-ci for continuous integration</li>
                <li>Improved the Testing coverage from 40% to 95% for existing and new frontend repository</li>
              </ul>
          </div>
        </div>
        <div id="panel-1" role="tabpanel" tabIndex={1} className="job">
          <button id="tab-1" role="tab" tabIndex={1} className="job-duration"><span>Dec 2020 - Jan 2022</span></button>
          <div>
          <h3><span>UI Engineer</span><span className="company highlight">&nbsp;@&nbsp;<a href="https://bhashini.gov.in/bhashadaan/en/home" className="inline-link" rel="noopener noreferrer" target="_blank">Bhasha Daan</a></span></h3>
            <ul>
              <li>Developed a web application to collect data by people to develop Speech Recognition, Text-to-Speech, Machine Translation and Optical Character Recognition for Indian languages</li>
              <li>Rewrote jquery in frontend using React and Next.js for a cleaner and more stable product</li>
              <li>Worked on existing Node.js backend to add new features</li>
              <li>Contributed to all aspects of the product including creating user stories, building React UI, developing backend features, and running applications in circle-ci for continuous integration</li>
              <li>Improved the Testing coverage from 40% to 95% for existing and new frontend repository</li>
            </ul>
          </div>
       </div>
     </div>
    </div>
  </section>
}

export default Experience