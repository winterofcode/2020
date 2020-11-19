import React from "react";
import "./Organisations.scss";

export const Box = ({ org }) => (
  <div className="org">
    <div className={!org.class ? "org__image" : org.class}>
      <img src={org.logo} alt={org.name} className="image" />
    </div>
    <h3 className="org__title">{org.name}</h3>

    <a 
    href={org.link} 
    target={org.openInNew ? "_blank" : undefined} 
    rel={org.openInNew ? "noopener noreferrer" : undefined} 
    className="linkFix btn-projects"
    >
      <button className="btn btn-apply">
        {org.btnText ? org.btnText : "View Projects"}
      </button>
    </a>
  </div>
);

export default () => {
  return (
    <>
      <section className="section-organisation" id="js-organisations">
        <div className="row">
          <h1 className="section-title">Organisations 2019</h1>
          <div className="grid-organisation">
            {Organisations2019.length !== 0 ? (
              Organisations2019.map((org, index) => (
                <Box key={index} org={org} />
              ))
            ) : (
              <h4>Coming Soon</h4>
            )}
          </div>
        </div>
        <div className="row">
          <h1 className="section-title">Organisations 2020</h1>
          <div className="grid-organisation">
            {Organisations2020.length !== 0 ? (
              Organisations2020.map((org, index) => (
                <Box key={index} org={org} />
              ))
            ) : (
              <h4 className="coming-soon-text">Coming Soon</h4>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const Organisations2019 = [
  {
    name: "DSC NSEC",
    logo: require("../../Assets/dscnsec.png"),
    class: "dsc-logo",
    link: "https://2019.winterofcode.com/dsc-nsec.html",
    openInNewPage: true
  },
  {
    name: "The Code Foundation",
    logo: require("../../Assets/tcf.jpg"),
    link: "https://2019.winterofcode.com/the-code-foundation.html",
    openInNewPage: true
  },
];
const Organisations2020 = [
  {
    name: "Deep Fusion AI",
    logo: require("../../Assets/deepfusionai.png"),
    link: "/organisation/deep-fusion-ai",
  },
 
  {
    name: "Absurd Nerd",
    logo: require("../../Assets/absurdNerd.png"),
    link: "/organisation/absurd-nerd",
  },
 
  {
    name: "Canvasbird",
    logo: require("../../Assets/canvasbird.png"),
    link: "/organisation/canvasbird",
  },
  {
    name: "eduAlgo",
    logo: require("../../Assets/eduAlgo.png"),
    link: "/organisation/eduAlgo",
  },
  {
    name: "DSC NIT Rourkela",
    logo: require("../../Assets/dscnitrourkela.png"),
    class: "dsc-logo",
    link: "/organisation/dsc-nit-rourkela",
  },
  {
    name: "DSC IEM",
    logo: require("../../Assets/dsciem.png"),
    class: "dsc-logo",
    link: "/organisation/dsc-iem",
  },
  {
    name: "FireShort",
    logo: require("../../Assets/fireshort.png"),
    link: "/organisation/fireshort",
  },
  {
    name: "Dynopii",
    logo: require("../../Assets/dynopii.png"),
    link: "/organisation/dynopii",
  },
  {
    name: "DSC-X",
    logo: require("../../Assets/dscx.png"),
    link: "/organisation/dsc-x",
  },
  {
    name: "Tesseract Coding",
    class: 'tesseract-logo',
    logo: require("../../Assets/tesseract.png"),
    link: "/organisation/tesseract-coding",
  },
  {
    name: "DSC NSEC",
    logo: require("../../Assets/dscnsec.png"),
    link: "/organisation/dsc-nsec",
    class: "dsc-logo",
  },
];
