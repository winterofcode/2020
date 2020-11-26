import React from "react"
import ProfileCard from "../Components/ProfileCard/ProfileCard"

const MentorsPage = () => {
    return (
        <div className="row">
        <h1 className="section-title">Our Mentors</h1>
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
      username: "Abhijit Tripathy",
      userphoto: require("../Assets/Abhijit-Tripathy.jpeg"),
      tags: ['eduAlgo'],
      description: "An enthusiastic python developer having interest in product development, an entrepreneur, author & opensource contributor.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/abhijit-tripathy-415912187/",
      TwitterLink: undefined,
      GithubLink: "https://github.com/Abhijit2505",
    },
    {
      username: "Soham Biswas",
      userphoto: require("../Assets/soham-biswas.jpeg"),
      tags: ['DSC IEM'],
      description: "GSoC '20 at Python Software Foundation, Former Research Intern at IIT ROPAR",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/soham-biswas-590784168/",
      TwitterLink: "https://twitter.com/Soham_Biswas1",
      GithubLink: "https://github.com/Nibba2018",
    },
    {
      username: "Balaka Biswas",
      userphoto: require("../Assets/balaka_biswas.jpeg"),
      tags: ['DSC IEM'],
      description: "I am a Data Science enthusiast and a Python Developer.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/balaka-biswas",
      TwitterLink: "https://twitter.com/biswas_balaka",
      GithubLink: "https://github.com/BALaka-18",
    },
    {
      username: "Anjali Jha",
      userphoto: require("../Assets/Anjali-Jha.jpeg"),
      tags: ['DSC NSEC'],
      description: "Winter of Code 2020 Mentor for DSC NSEC, Web Developer, Competitive Programmer",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/anjali-jha-1903/",
      TwitterLink: undefined,
      GithubLink: "https://github.com/anjali1903/",
    },
    {
      username: "Anuska Sinha",
      userphoto: require("../Assets/Anuska-Sinha.jpeg"),
      tags: ['DSC NSEC'],
      description: "Winter of Code 2020 Mentor for DSC NSEC, Web Developer, ML enthusiast and Competitive Programmer.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/anuska-sinha-039002160/",
      TwitterLink: undefined,
      GithubLink: "https://github.com/theslytherin",
    },
    {
      username: "Debjeet Banerjee",
      userphoto: require("../Assets/Debjeet-Banerjee.jpeg"),
      tags: ['DSC IEM'],
      description: "THM Hacker, Researcher at IEM-IEDC",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/debjeet-banerjee-93a137198",
      TwitterLink: undefined,
      GithubLink: "https://github.com/whokilleddb",
    },
    {
      username: "Rishiraj Acharya",
      userphoto: require("../Assets/Rishiraj-Acharya.jpg"),
      tags: ['Deep Fusion AI', 'DSC NSEC'],
      description: "ML Engineer, Microsoft Student Partner, deeplearning.ai Ambassador, former Facilitator at Stanford University.",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/rishirajacharya/",
      TwitterLink: "https://twitter.com/RishirajAcharya",
      GithubLink: "https://github.com/rishiraj",
    },
    {
      username: "Ashutosh Krishna",
      userphoto: require("../Assets/Ashutosh-Krishna.jpg"),
      tags: ['DSC NSEC'],
      description: "Winter of Code 2020 Mentor for DSC NSEC, Backend Web Developer, App Developer",
      organisationLogo: require("../Assets/org-logo.png"),
      organisationName: "Winter of Code",
      LinkedInLink: "https://www.linkedin.com/in/ashutoshkrris/",
      TwitterLink: undefined,
      GithubLink: "https://github.com/ashutoshkrris/",
    },
  ];
  
