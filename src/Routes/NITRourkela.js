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
      name: "project-avocado-web",
      logo: require("../Assets/dscnitrourkela.png"),
      tag: "dsc-nit-rourkela",
      class: "dsc-logo",
      link: "https://github.com/dscnitrourkela/project-avocado-web",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "project-guava",
      logo: require("../Assets/dscnitrourkela.png"),
      tag: "dsc-nit-rourkela",
      class: "dsc-logo",
      link: "https://github.com/dscnitrourkela/project-guava",
      btnText: "View Project",
      openInNew: true
    }
  ];