import React from "react";
import "./Reviews.scss";
import Review from "../Components/Review";

export default () => {
  return (
    <section className="section-reviews">
      <div className="row">
        <h2 className="section-title">Reviews</h2>
        <div className="review-container">
          {Reviews.map((review) => (
            <Review 
            key={review.id}
            username={review.username} 
            title={review.title}
            description={review.description}
            userphoto={review.userphoto}
            organisationLogo={review.organisationLogo}
            organisationName={review.organisationName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = [
  {
    username: "Vishwajeet Raj",
    userphoto: require("../Assets/me.jpg"),
    title: "Fabulously Fantastic",
    description:
      "In Christopher Nolan’s “Inception” a specialist in corporate mental espionage and his co-workers penetrate the minds of their slumbering targets.",
    organisationName: "Winter of Code",
    organisationLogo: require("../Assets/org-logo.png"),
  },
  {
    username: "Vishwajeet Raj",
    userphoto: require("../Assets/me.jpg"),
    title: "Fabulously Fantastic",
    description:
      "In Christopher Nolan’s “Inception” a specialist in corporate mental espionage and his co-workers penetrate the minds of their slumbering targets.",
    organisationName: "Winter of Code",
    organisationLogo: require("../Assets/org-logo.png"),
  },
  {
    username: "Vishwajeet Raj",
    userphoto: require("../Assets/me.jpg"),
    title: "Fabulously Fantastic",
    description:
      "In Christopher Nolan’s “Inception” a specialist in corporate mental espionage and his co-workers penetrate the minds of their slumbering targets.",
    organisationName: "Winter of Code",
    organisationLogo: require("../Assets/org-logo.png"),
  },
  {
    username: "Vishwajeet Raj",
    userphoto: require("../Assets/me.jpg"),
    title: "Fabulously Fantastic",
    description:
      "In Christopher Nolan’s “Inception” a specialist in corporate mental espionage and his co-workers penetrate the minds of their slumbering targets.",
    organisationName: "Winter of Code",
    organisationLogo: require("../Assets/org-logo.png"),
  },
];
