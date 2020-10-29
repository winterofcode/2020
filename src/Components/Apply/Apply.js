import React from "react";
import { Link } from "react-scroll";
import "./Apply.scss"

export default () => {
    return (
        <section className="section-apply" id="js-apply">
        <div className="row">
        <h1 className="section-title">Apply</h1>
        <h2 className="apply-text">Start your journey with Winter Of Code & be a part of our Open Source memory.</h2>
        <div className="btn-flex">
        <button className="btn btn-apply1">
        <Link to="/">Apply as Organisation</Link>
        </button>
        <button className="btn btn-apply1">
        <Link to="/">Apply as Student</Link>
        </button>
        </div>



        </div>
        </section>
    )
}