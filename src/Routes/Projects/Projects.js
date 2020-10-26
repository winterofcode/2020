import React from "react"
import { Box } from "../../Components/Organisations/Organisations"
import "./Projects.scss"

// let Render = [];

export default (props) =>{
    // console.log(props.match.params.organisation)
    let orgs = ['tcf', 'dscnsec', 'dsciem']
    if(orgs.includes(props.match.params.organisation)){
    }else {
        window.location.assign("/")
    }
    // let param = props.match.params.organisation;
    // if(props && props.match && props.match.params && props.match.params.oganisation) {
    //     param = props.match.params.oganisation;
    //     console.log(param)
    // }

    // useEffect(() => {
    //     if(props.match.params.organisation === 'tcf' ) {
    //         Render = TCFProjects;
    //     } else if(props.match.params.organisation === 'dscnsec') {
    //         Render = DSCNSECProjects;
    //     } else if(props.match.params.organisation === 'dsciem') {
    //         Render = DSCIEMProjects;
    //     }
    //     console.log(Render)
    // },[])


    return (
        <section className="section-projects">
        <div className="row">
        <h1 className="section-title">Projects</h1>
        <div className="grid-projects">

        {
            props.match.params.organisation === "tcf" ? TCFProjects.map((project, index) => <Box key={index} org={project} />) : null
        }
        {
            props.match.params.organisation === "dscnsec" ? DSCNSECProjects.map((project, index) => <Box key={index} org={project} />) : null
        }
        {
            props.match.params.organisation === "dsciem" ? DSCIEMProjects.map((project, index) => <Box key={index} org={project} />) : null
        }
        </div>
        </div>
        </section>
    )
    
}
const TCFProjects = [
    {
        name : "Aify",
        logo : require("../../Assets/tcf.jpg"),
        tag : "tcf",
        link: "www.github.com"
    },
    {
        name : "TCF Homepage",
        logo : require("../../Assets/tcf.jpg"),
        tag : "tcf",
        link: "www.github.com"
    },
]

const DSCNSECProjects = [
    {
        name : "Logo Generator",
        logo : require("../../Assets/dscnsec.png"),
        tag : "dscnsec",
        class: "dsc-logo",
        link: "www.github.com"
    },
    {
        name : "UrlShortener",
        logo : require("../../Assets/dscnsec.png"),
        tag: "dscnsec",
        class: "dsc-logo",
        link: "www.github.com"
    },
]

const DSCIEMProjects = [
    {
        name : "IEM IEM",
        logo : require("../../Assets/dsciem.png"),
        tag : "dsciem",
        class: "dsc-logo",
        link: "www.github.com"
    },
    {
        name : "IEM IEM IEM",
        logo : require("../../Assets/dsciem.png"),
        tag: "dsciem",
        class: "dsc-logo",
        link: "www.github.com"
    },
]

// const Projects = [
//     {
//         name : "Aify",
//         logo : require("../../Assets/dscnsec.png"),
//         tag : "tcf"
//     },
//     {
//         name : "TCF Homepage",
//         logo : require("../../Assets/tcf.jpg"),
//         tag : "tcf"
//     },
//     {
//         name : "Logo Generator",
//         logo : require("../../Assets/dscnsec.png"),
//         tag : "dscnsec",
//         class: "dsc-logo"
//     },
//     {
//         name : "UrlShortener",
//         logo : require("../../Assets/tcf.jpg"),
//         tag: "dscnsec"

//     },
//     {
//         name : "IEM IEM",
//         logo : require("../../Assets/dscnsec.png"),
//         tag : "dsciem",
//         class: "dsc-logo"
//     },
//     {
//         name : "IEM IEM IEM",
//         logo : require("../../Assets/tcf.jpg"),
//         tag: "dsciem"

//     },
// ]