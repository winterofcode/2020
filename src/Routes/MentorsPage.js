import React from "react"
import ProfileCard from "../Components/ProfileCard/ProfileCard"

const MentorsPage = () => {
    return (
        <div className="row">
        <div className="mentors-grid">
        {Mentor.map((mentor, index) => (
            <ProfileCard key={index} {...mentor} />
        ))}
        </div>
        </div>
    )
}

export default MentorsPage

const Mentor = [
    {
      username: "Vishwajeet Raj",
      userphoto: require("../Assets/me.jpg"),
      title: "Awesome",
      description: "It was an amazing Experienc as usual. I liked it to the best of day and all. thanks for reading.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
    },
    {
      username: "Vishwajeet Raj",
      userphoto: require("../Assets/me.jpg"),
      title: "Awesome",
      description: "It was an amazing Experienc as usual. I liked it to the best of day and all. thanks for reading.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
    },
    {
      username: "Vishwajeet Raj",
      userphoto: require("../Assets/me.jpg"),
      title: "Awesome",
      description: "It was an amazing Experienc as usual. I liked it to the best of day and all. thanks for reading.",
      organisationLogo: require("../Assets/eduAlgo.png"),
      organisationName: "eduAlgo",
    },
  ];
  