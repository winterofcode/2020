import React from "react"
import "./ProfileCard.scss"

export default ({src, username, userphoto, title, description, organisationLogo, organisationName }) => {
    return (
        <div className="profile">
        <div className="pos">
        <div className="image-container">
        <img src={userphoto} alt={username} className="image" />
        </div>
        <h3 className="username">{username}</h3>
        </div>

        <div className="profile-content">
        <h2 className="profile-title">{title}</h2>
        <p className="profile-text">{description}</p>
        <div className="profile-organisation">
        
        <p className="profile-organisation-name">{organisationName}</p>
        </div>
        </div>
        </div>
    )
}