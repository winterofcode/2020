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
      link: "https://github.com/dscnsec/logo-generator",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "Doc Scanner",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://github.com/dscnsec/DocScanner",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "Noted App",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://github.com/dscnsec/noted-App",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "DSC NSEC APP",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://github.com/dscnsec/DSC-NSEC-App",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "DSC NSEC Algorithms",
      logo: require("../Assets/dscnsec.png"),
      tag: "dscnsec",
      class: "dsc-logo",
      link: "https://github.com/dscnsec/DSC-NSEC-Algorithms",
      btnText: "View Project",
      openInNew: true
    },
  ];