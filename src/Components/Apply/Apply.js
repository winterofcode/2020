import React from "react";
import "./Apply.scss"

export default () => {
    return (
        <section className="section-apply" id="js-apply">
        <div className="row">
        <h1 className="section-title">Apply</h1>
        <h2 className="apply-text">Start your journey with Winter Of Code & be a part of our Open Source memory.</h2>
        <div className="btn-flex">
        <button className="btn btn-apply1">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1FzEgyHxsb6xwiRLkZdRCysNLQ15KJ-rniCLiJsODqcv8Zw/viewform?usp=sf_link" className="linkFix">Apply as Organisation</a>
        </button>
        <button className="btn btn-apply1">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDXgvlFMAZFZ3K6rsseVPoa5pgVk-kYpaU7h6OkA4AE2SGEA/viewform?usp=sf_link" className="linkFix">Apply as Student</a>
        </button>
        </div>



        </div>
        </section>
    )
}