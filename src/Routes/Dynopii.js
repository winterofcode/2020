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
      name: "PyVirtual AudioCable",
      logo: require("../Assets/dynopii.png"),
      tag: "dynopii",
    //   class: "dsc-logo",
      link: "https://github.com/dynopii/pyvirtualaudiocable/",
      btnText: "View Project",
      openInNew: true
    },
  ];