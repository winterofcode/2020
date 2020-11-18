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
      name: "Ideas List",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/dsc-iem/WoC-Project-Ideas/blob/main/README.md",
      btnText: "View Ideas",
      openInNew: true
    },
    {
      name: "Fake-Stream",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/Nibba2018/Fake-Stream",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "Python Reverse Shell",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/whokilleddb/Reverse-Shell",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "DSC-IEM Blogs",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/dsc-iem/blog",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "rake_new2",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/BALaka-18/rake_new2",
      btnText: "View Project",
      openInNew: true
    },
    {
      name: "TextSentiment Analysis",
      logo: require("../Assets/dsciem.png"),
      tag: "dsciem",
      class: "dsc-logo",
      link: "https://github.com/khanfarhan10/TextSentimentAnalysis",
      btnText: "View Project",
      openInNew: true
    },
  ];