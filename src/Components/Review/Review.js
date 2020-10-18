import React from "react"
import "./Review.scss"

export default ({src, username, userphoto, title, description, organisationLogo, organisationName }) => {
    return (
        <div className="review">
        <div className="pos">
        <div className="image-container">
        <img src={userphoto} alt="Reviewer" className="image" />
        </div>
        <h3 className="username">{username}</h3>
        </div>

        <div className="review-content">
        <h2 className="review-title">{title}</h2>
        <p className="review-text">{description}</p>
        <div className="review-organisation">
        <div className="review-organisation-img-container">
        <img src={organisationLogo} className="image" alt="organisation-name" />
        </div>
        <p className="review-organisation-name">{organisationName}</p>
        </div>
        </div>
        </div>
    )
}