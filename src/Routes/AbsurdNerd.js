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
      name: "SimplifyReports",
      logo: require("../Assets/absurdNerd.png"),
      tag: "Absurd Nerd",
      link: "https://github.com/AbsurdNerd/SimplifyReports",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "SimplifyReport Backend",
      logo: require("../Assets/absurdNerd.png"),
      tag: "Absurd Nerd",
      class: "text-big-fix",
      link: "https://github.com/AbsurdNerd/SimplifyReport_Backend",
      btnText: "View Project",
      openInNew: true
    }
  ];