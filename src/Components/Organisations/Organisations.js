import React from "react"
import {Link} from "react-router-dom"
import "./Organisations.scss"

export const Box = ({org}) => (
    <div className="org">
        <div className={!org.class ? "org__image" : org.class }>
        <img src={org.logo} alt={org.name} className="image" />
        </div>
        <h3 className="org__title">{org.name}</h3>
        <button className="btn btn-apply"><Link to={org.link} className="linkFix btn-projects">View Projects</Link></button>
        </div>
)

export default () => {
    return (
        <section className="section-organisation" id="js-organisations">
        <div className="row">
        <h1 className="section-title">Organisations</h1>
        <div className="grid-organisation">

        {Organisations.map((org,index) => (
       <Box key={index} org={org} />
        ))}

        </div>
        </div>
        </section>
    )
}

const Organisations = [
    {
        name : "DSC NSEC",
        logo : require("../../Assets/dscnsec.png"),
        class: "dsc-logo",
        link: "/projects/dscnsec"
    },
    {
        name : "The Code Foundation",
        logo : require("../../Assets/tcf.jpg"),
        link: "/projects/tcf"
    },
    {
        name : "DSC IEM",
        logo : require("../../Assets/dsciem.png"),
        class: "dsc-logo",
        link: "projects/dsciem"
    },
]