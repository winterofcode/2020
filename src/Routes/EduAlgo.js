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
      name: "eduAlgo Python Package",
      logo: require("../Assets/eduAlgo.png"),
      tag: "eduAlgo",
      link: "https://github.com/Canvasbird/canvasboard",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "eduAlgo Documentation Page",
      logo: require("../Assets/eduAlgo.png"),
      tag: "eduAlgo",
      link: "https://github.com/eduAlgo/documentation",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "eduAlgo App",
      logo: require("../Assets/eduAlgo.png"),
      tag: "eduAlgo",
      link: "https://github.com/eduAlgo/edualgo-app-demo",
      btnText: "View Project",
      openInNew: true
    },
  ];