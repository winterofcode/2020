import React from "react";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

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
  );
};

export default MentorsPage;

const Mentor = [
  // Dynopii -- Mentors
  {
    username: "Abhishek Nandy",
    userphoto: require("../Assets/Abhishek-Nandy.jpg"),
    tags: ["Dynopii"],
    description:
      "Microsoft MVP, Intel Black Belt Developer, Intel Software Innovator, AI Researcher and Consulting",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/abhishek-nandy-74ba592a/",
    TwitterLink: "https://twitter.com/AbhishekNandy81",
    GithubLink: "https://github.com/AbhiLegend",
  },
  // Deep Fusion AI -- Mentors
  {
    username: "Sayak Paul",
    userphoto: require("../Assets/Sayak-Paul.jpg"),
    tags: ["DSC NSEC", "Deep Fusion AI"],
    description:
      "I call `model.fit()` at PyImageSearch. I like to binge-watch serials and movies on Netflix sometimes.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    TwitterLink: "https://twitter.com/RisingSayak",
    GithubLink: "https://github.com/sayakpaul",
  },
  {
    username: "Kazi Haque",
    userphoto: require("../Assets/Qazi-Haque.jpg"),
    tags: ["Dynopii"],
    description:
      "Product Manager at Hipla, Tech Lead at Contatrack.ai, Intel oneAPI Certified Instructor, Intel Software Innovator",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/haquekazi/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/kazi92",
  },
  // FireShort and DSC-X
  {
    username: "Anubhav Singh",
    userphoto: require("../Assets//Anubhav-Singh.jpeg"),
    tags: ["FireShort", "DSC-X"],
    description:
      'GSoC 2019 @ Submitty | Author of "Hands on Python Deep Learning for Web" and "Mobile Deep Learning with TensorFlow Lite, ML Kit and Flutter',
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://linkedin.com/in/xprilion",
    TwitterLink: "https://twitter.com/xprilion",
    GithubLink: "http://github.com/xprilion",
  },
  // Canvasbird -- Mentors
  {
    username: "Kajol Kumari",
    userphoto: require("../Assets/Kajol-Kumari.jpg"),
    tags: ["Canvasbird"],
    description:
      "GSoC'20 @cloudCV | Co-Founder of Canvasbird | MEAN stack developer | Open source contributor | Learner.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/kajol-kumari-73245b166/",
    TwitterLink: "https://twitter.com/_Kajol_singh_",
    GithubLink: "https://github.com/Kajol-Kumari",
  },
  {
    username: "Soham Biswas",
    userphoto: require("../Assets/soham-biswas.jpeg"),
    tags: ["DSC IEM"],
    description:
      "GSoC '20 at Python Software Foundation, Former Research Intern at IIT ROPAR",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/soham-biswas-590784168/",
    TwitterLink: "https://twitter.com/Soham_Biswas1",
    GithubLink: "https://github.com/Nibba2018",
  },
  // DSC IEM -- Mentors
  {
    username: "Mahak Makhria",
    userphoto: require("../Assets/Mahak-Makharia.jpeg"),
    tags: ["DSC IEM"],
    description:
      "Software Developer and Designer. Leading DSC IEM. Building thedesignerdev",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/mahakmakharia/",
    TwitterLink: "https://twitter.com/mahakmakharia",
    GithubLink: "https://github.com/mahakmakharia",
  },
  {
    username: "Balaka Biswas",
    userphoto: require("../Assets/balaka_biswas.jpeg"),
    tags: ["DSC IEM"],
    description: "I am a Data Science enthusiast and a Python Developer.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/balaka-biswas",
    TwitterLink: "https://twitter.com/biswas_balaka",
    GithubLink: "https://github.com/BALaka-18",
  },
  {
    username: "Farhan Hai Khan",
    userphoto: require("../Assets/Farhan-Hai-Khan.jpg"),
    tags: ["DSC IEM"],
    description:
      "Former Data Science Intern at BrickView Studios. Independent Researcher in Deep Learning Technologies.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/fkpro/",
    TwitterLink: "https://twitter.com/itsmetheswagger",
    GithubLink: "https://github.com/khanfarhan10",
  },
  {
    username: "Tannistha Pal",
    userphoto: require("../Assets/Tannistha-Pal.jpg"),
    tags: ["DSC IEM"],
    description:
      "Certified YUVA Youth LEADER | Working Committee DSC-IEM | Machine Learning and Deep Learning Enthusiast, interested in Competitive Coding.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/paltannistha/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/paltannistha",
  },
  {
    username: "Debjeet Banerjee",
    userphoto: require("../Assets/Debjeet-Banerjee.jpeg"),
    tags: ["DSC IEM"],
    description: "THM Hacker, Researcher at IEM-IEDC",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/debjeet-banerjee-93a137198",
    TwitterLink: undefined,
    GithubLink: "https://github.com/whokilleddb",
  },
  {
    username: "Arita Sen",
    userphoto: require("../Assets/Aritra Sen.jpg"),
    tags: ["DSC IEM"],
    description: "Spider, 2nd year undergrad at IEM. Works with cookies.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/asrient",
    TwitterLink: "https://twitter.com/ooritroo",
    GithubLink: "https://github.com/asrient",
  },
  // {
  //   username: "Divya Prakash",
  //   userphoto: require("../Assets"),
  //   tags: ['DSC IEM'],
  //   description: "CyberSecurity and DevOps Team Lead @DSC-IEM, SDE intern at GoPerceptive Technologies.",
  //   organisationLogo: require("../Assets/org-logo.png"),
  //   organisationName: "Winter of Code",
  //   LinkedInLink: "https://www.linkedin.com/in/divyake/",
  //   TwitterLink: "https://twitter.com/DivyaPr75156601",
  //   GithubLink: "https://github.com/divyake",
  // },
  // eduAlgo -- Mentors
  {
    username: "Abhijit Tripathy",
    userphoto: require("../Assets/Abhijit-Tripathy.jpeg"),
    tags: ["eduAlgo"],
    description:
      "An enthusiastic python developer having interest in product development, an entrepreneur, author & opensource contributor.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/abhijit-tripathy-415912187/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/Abhijit2505",
  },
  // DSC NIT Rourkela -- Mentors
  {
    username: "Abel Mathew",
    userphoto: require("../Assets/Abel-Mathew.jpg"),
    tags: ["DSC NIT Rourkela"],
    description: "Open-sourcing, one step at a time!",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "http://linkedin.com/in/DesignrKnight",
    TwitterLink: "https://twitter.com/designrknight",
    GithubLink: "https://github.com/DesignrKnight",
  },
  {
    username: "Abhibhaw Kumar Asthana",
    userphoto: require("../Assets/Abhibhaw-Kumar-Asthana.jpeg"),
    tags: ["DSC NIT Rourkela"],
    description: "Flutter/Android developer, master tinkerer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: undefined,
    TwitterLink: "https://twitter.com/imabhibhaw",
    GithubLink: "https://github.com/abhibhaw",
  },
  {
    username: "Ankesh Anku",
    userphoto: require("../Assets/Ankesh-Anku.jpg.jpeg"),
    tags: ["DSC NIT Rourkela"],
    description:
      "CSE UnderGrad | Developer of anything that translates to 0 and 1",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "http://linkedin.com/in/ankesh-anku",
    TwitterLink: "https://twitter.com/AnkeshAnku",
    GithubLink: "https://github.com/ankank30",
  },
  {
    username: "Chinmay Kabi",
    userphoto: require("../Assets/Chinmay-Kabi.jpeg"),
    tags: ["DSC NIT Rourkela"],
    description: "Flutter/Android developer, master tinkerer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "",
    TwitterLink: "https://twitter.com/ChinuKabi",
    GithubLink: "https://github.com/Chinmay-KB",
  },

  {
    username: "Patibanda Sriram",
    userphoto: require("../Assets/Patibanda-Sriram.jpg"),
    tags: ["DSC NIT Rourkela"],
    description: "Sophomore | Passionate about web and mobile dev",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "http://linkedin.com/in/patibanda-sriram-237a0b193/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/SriramPatibanda",
  },
  {
    username: "Ritesh Patil",
    userphoto: require("../Assets/Ritesh-Patil.jpeg"),
    tags: ["DSC NIT Rourkela"],
    description: "Web Developer | Tech and Design Enthusiast | Photographer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/ritesh-patil-6049631a0/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/riteshsp2000",
  },
  {
    username: "Smarak Das",
    userphoto: require("../Assets/Smarak-Das.jpg"),
    tags: ["DSC NIT Rourkela"],
    description: "App developer | Tech enthusiast | Flutter 💙",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: undefined,
    TwitterLink: "https://twitter.com/Thesmader",
    GithubLink: "https://github.com/Thesmader",
  },
  // DSC NSEC -- Mentors
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
    username: "Rajwrita Nath",
    userphoto: require("../Assets/Rajwrita-Nath.jpg"),
    tags: ["DSC NSEC"],
    description:
      "Women Techmakers Scholar, technical content moderator Manning Publications, Mentor for DSC NSEC",
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
  // Deep Fusion AI -- Mentors
  {
    username: "Ritesh Prasad Singh",
    userphoto: require("../Assets/Ritesh.jpg"),
    tags: ["Deep Fusion AI"],
    description:
      "Data Science Enthusiast",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/chafer/",
    TwitterLink: "https://twitter.com/Ritesh_chafer",
    GithubLink: "https://github.com/ritesh-chafer",
  },
  {
    username: "Rishiraj Acharya",
    userphoto: require("../Assets/Rishiraj-Acharya.jpg"),
    tags: ["DSC NSEC", "Deep Fusion AI"],
    description:
      "ML Engineer, Microsoft Student Partner, deeplearning.ai Ambassador, former Facilitator at Stanford University.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/rishirajacharya/",
    TwitterLink: "https://twitter.com/RishirajAcharya",
    GithubLink: "https://github.com/rishiraj",
  },
  {
    username: "Saurav Kumar",
    userphoto: require("../Assets/Saurav-Kumar.jpg"),
    tags: ["DSC NSEC"],
    description:
      "WOC 2020 Mentor for DSC NSEC, App Developer",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/saurav0001kumar/",
    TwitterLink: undefined,
    GithubLink: "https://github.com/saurav0001kumar/",
  },


  // Absurd Nerd -- Mentors
  {
    username: "Dheeraj Kotwani",
    userphoto: require("../Assets/Dheeraj-Kotwani.jpeg"),
    tags: ["AbsurdNerd"],
    description:
      "Android Developer | Open Source Contributor | Competitive Programmer.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/dheerajkotwani/",
    TwitterLink: "https://twitter.com/kotwani_dheeraj",
    GithubLink: "https://github.com/dheerajkotwani",
  },
  {
    username: "Manshi Todi",
    userphoto: require("../Assets/Manshi-Todi.jpeg"),
    tags: ["AbsurdNerd"],
    description:
      "I am Django developer, Competitive Programmer and an open source enthusiast.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/manshi-todi-a017a2178/",
    TwitterLink: "https://twitter.com/manshitodi",
    GithubLink: "https://github.com/todi-2000",
  },
  {
    username: "Vatsal Kesarwani",
    userphoto: require("../Assets/vatsal-kesarwani.jpg"),
    tags: ["AbsurdNerd"],
    description:
      "I am an android developer and an open source enthusiast. I am also a passionate UI designer and I love to androidify Ideas.",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/vatsal-kesarwani/",
    TwitterLink: "https://twitter.com/KesarwaniVatsal",
    GithubLink: "https://github.com/plazzy99",
  },
  {
    username: "Diya Jaiswal",
    userphoto: require("../Assets/Diya-Jaiswal.jpeg"),
    tags: ["AbsurdNerd"],
    description:
      "Backend Developer | Competitive Programmer | Open Source Enthusiast | NWoC'20 Mentor | Codechef Chapter Lead",
    organisationLogo: require("../Assets/org-logo.png"),
    organisationName: "Winter of Code",
    LinkedInLink: "https://www.linkedin.com/in/diyajaiswal11/",
    TwitterLink: "https://twitter.com/diyajaiswal_11",
    GithubLink: "https://github.com/diyajaiswal11",
  },
];

// {
//   username: "",
//   userphoto: require(""),
//   tags: ['DSC IEM'],
//   description: "",
//   organisationLogo: require("../Assets/org-logo.png"),
//   organisationName: "Winter of Code",
//   LinkedInLink: "",
//   TwitterLink: undefined,
//   GithubLink: "",
// },
