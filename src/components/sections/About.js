import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "vasif.will",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I am Vasif. For past 3 years I’ve been working alongside developers team to help create and optimize web application. My biggest accomplishment has been coming up with learning reactjs that i used to create and optimized  user interface  in my previous applications. Also i created various web applications aside for learning purpose which  kept me  up to date in this rapidly changing industry."
};

const progressData = [
  {
    id: 1,
    title: "Software Engineering",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Design",
    percantage: 80,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Hiking",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 14,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of tea",
    count: 3240,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied teammates",
    count: 20,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Certificates",
    count: 3,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/uc?id=1ggQi4KEfOZ5_AOJ6R45haUHhIdH7iO9D&export=download" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
