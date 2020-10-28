import React from "react"
import {Box} from "../Components/Organisations/Organisations"
import "./Projects.scss";


export default () => (
    <section className="section-projects">
      <div className="row">
        <h1 className="section-title">Projects</h1>
        <div className="grid-projects">
           {Projects.map((project, index) => (
                <Box key={index} org={project} />
              ))}
            
        </div>
      </div>
    </section>
)

const Projects = [
    {
      name: "Logo Generator",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://www.github.com",
      btnText: "View Project"
    },
    {
      name: "Url Shortener",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://www.github.com",
      btnText: "View Project"
    },
  ];