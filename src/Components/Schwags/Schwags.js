import React from "react";
import "./Schwags.scss";

const Template = ({name, image, classes, linkName}) => (
  <div className={`${classes} schwagbox`}>
            {" "}
            <div className={`schwag-image-container`}>
              <img
                src={image}
                draggable='false'
                alt={name}
                className="image"
              />
              <p className="Schwag-heading">{name} {linkName && <a className="footer-link" href="https://isb.alienbrains.in/2021">{linkName}</a>}</p>
            </div>
          </div>
)

const Schwags = () => {
  return (
    <section className="schwags" id="schwags-section">
      <div className="row">
        <h1 className="section-title">Rewards for Top Contributors</h1>
        <div className="schwags-grid">
         
  {SchwagsData.map((schwag, index) => <Template key={index} {...schwag} /> ) }
          
        </div>
      </div>
    </section>
  );
};

export default Schwags;

const SchwagsData = [
  // {
  //   name: "Books",
  //   image: require("../../Assets/Manning.svg"),
  //   classes: "", 
  // },
  {
    name: "Exclusive Schwags",
    image: require("../../Assets/Google Developers.svg"),
    classes: "", 
  },
  {
    name: "Qwiklabs Credits",
    image: require("../../Assets/Qwiklabs.png"),
    classes: "", 
  },
  {
    name: "1 Year KiwisMedia Premium Subscription and swags",
    image: require("../../Assets/kiwismedia.png"),
    classes: "", 
  },
  
   {
     name: " T-shirts and 50% off coupon for",
     image: require("../../Assets/Alienbrains.png"),
     classes: "", 
     linkName: 'ISB 2.0'
   },
  {
    name: "Winter of Code Schwags",
    image: require("../../Assets/swags.png"),
    classes: "first-child", 
  },
]



