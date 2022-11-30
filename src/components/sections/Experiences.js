import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor's degree ",
    years: "2011 - 2015",
    content:
      "Engineering of Economy. Marketing. Azerbaijan and Greece",
  },
  {
    id: 2,
    title: "Exchange Bachelor’s Degree",
    years: "2013 - 2015",
    content:
      "Engineering of Economy. Marketing. Bunker Hill College. Boston.",
  },
  {
    id: 3,
    title: "Frontend  Bootcamp Certificate",
    years: "2019-2020",
    content:
      "Frontend Reactjs certificate by Stack education Emerson College. Experienced with the Node.js",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    years: "June 2019 - June 2022",
    content:
      "Worked in using React JS components Forms, Events, Keys, Router, and Flux concept.",
  },
  {
    id: 2,
    title: "Front-End Developer",
    years: "June 2021 - Jan 2022",
    content:
      "Worked with an Agile(Scrum) team of 12 members and provided end-to-end solutions for clients.",
  },
  {
    id: 3,
    title: "Digital Marketing ",
    years: "Jan 2018 - June 2019",
    content:
      "Automated marketing KPI reporting using Google Analytics and Google sheets, saving  of manual work each work.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
