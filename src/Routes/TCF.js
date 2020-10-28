import React from "react"
import {Box} from "../Components/Organisations/Organisations"
import "./Projects.scss";


export default () => (
    <section className="section-projects">
      <div className="row">
        <h1 className="section-title">Projects</h1>
        <div className="grid-projects">
           {Projects.length !== 0 ? Projects.map((project, index) => (
                <Box key={index} org={project} />
              )) : "No Projects Yet"}
        </div>
      </div>
    </section>
)

const Projects = [
    {
      name: "Aify",
      logo: require("../Assets/tcf.jpg"),
      tag: "tcf",
      link: "https://www.github.com",
      btnText: "View Project"
    },
    {
      name: "Vision Backend",
      logo: require("../Assets/tcf.jpg"),
      tag: "tcf",
      link: "https://www.github.com",
      btnText: "View Project"
    },
    {
      name: "Vision Frontend",
      logo: require("../Assets/tcf.jpg"),
      tag: "tcf",
      link: "https://www.github.com",
      btnText: "View Project"
    },
  ];