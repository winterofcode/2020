import React from "react"
import ProfileCard from "../Components/ProfileCard/ProfileCard"

const OrganizersPage = () => {
  return (
    <div className='row'>
      <h1 className='section-title'>Our Organizers</h1>
      <div className='mentors-grid'>
        {OrganizersData.map((mentor, index) => (
          <ProfileCard key={index} {...mentor} />
        ))}
      </div>
    </div>
  )
}

export default OrganizersPage

const OrganizersData = [
  {
    username: "Vishwajeet Raj",
    userphoto: require("../Assets/vishwajeet.png"),
    tags: ["DSC NSEC"],
    description:
      "Web Team Lead at DSC NSEC, Designer and Developer. Building vishwajeet.js. JavaScript 💛",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/vishwajeetraj11/",
    TwitterLink: "https://twitter.com/Vishwajeet323",
    GithubLink: "https://github.com/vishwajeetraj11",
  },
  {
    username: "Shailly Keshari",
    userphoto: require("../Assets/Shailly-Keshari.jpg"),
    tags: ["DSC NSEC"],
    description: "CS Undergraduate, Machine Learning enthusiast",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/shaillykeshari/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/shaillykeshari",
  },
  {
    username: "Rajwrita Nath",
    userphoto: require("../Assets/Rajwrita-Nath.jpg"),
    tags: ["DSC NSEC"],
    description:
      "Lead at DSC NSEC, Women Techmakers Scholar, Technical Content Moderator Manning Publications",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/rajwrita-nath/",
    TwitterLink: "https://twitter.com/rajwrita",
    GithubLink: "https://github.com/rajwrita",
  },
  {
    username: "Anjali Jha",
    userphoto: require("../Assets/Anjali-Jha.jpeg"),
    tags: ["DSC NSEC"],
    description:
      "Contributor at Mozilla, Web Developer, Competitive Programmer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/anjali-jha-1903/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/anjali1903/",
  },
  {
    username: "Anuska Sinha",
    userphoto: require("../Assets/Anuska-Sinha.jpeg"),
    tags: ["DSC NSEC"],
    description:
      "Winter of Code 2020 Mentor for DSC NSEC, Web Developer, ML enthusiast and Competitive Programmer.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/anuska-sinha-039002160/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/theslytherin",
  },
  {
    username: "Ashutosh Krishna",
    userphoto: require("../Assets/Ashutosh-Krishna.jpg"),
    tags: ["DSC NSEC"],
    description:
      "Winter of Code 2020 Mentor for DSC NSEC, Backend Web Developer, App Developer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/ashutoshkrris/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/ashutoshkrris/",
  },

  {
    username: "Sucheta Nandy",
    userphoto: require("../Assets/Sucheta-Nandy.jpg"),
    tags: ["DSC NSEC"],
    description:
      "ML and Data Science Enthusiast, JBNSTS BKMB Scholar 2018, keen & fast learner",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/sucheta-nandy-a79605180/",
    TwitterLink: "https://twitter.com/NandySucheta",
    GithubLink: "https://github.com/sucheta-nandy",
  },
  {
    username: "Ayush Singh",
    userphoto: require("../Assets/Ayush-Singh.jpg"),
    tags: ["DSC NSEC"],
    description:
      "Flutter Dev, Technical Content Moderator at Manning Publications.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/ayush-singh-5823a5180/",
    TwitterLink: "https://twitter.com/ahyush_670",
    GithubLink: "https://github.com/ayush-670",
  },
  {
    username: "Ritesh Prasad Singh",
    userphoto: require("../Assets/Ritesh.jpg"),
    tags: ["Deep Fusion AI"],
    description: "Data Science Enthusiast",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/chafer/",
    TwitterLink: "https://twitter.com/Ritesh_chafer",
    GithubLink: "https://github.com/ritesh-chafer",
  },
]
