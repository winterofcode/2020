import React from "react";
import "./Accordion.scss";
import Accordion from "../Accordion";

export default () => {
  return (
    <section className="section-faqs" id="section-faqs">
      <div className="row">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <div className="accordion__section">
        {AccordionsData.map((data, index) => <Accordion key={index} title={data.title}><span className="accordion-text">{data.answer}</span></Accordion>)}
      </div>
     
      </div>
    </section>
  );
};

const AccordionsData = [
  {
    title: "When can students apply for Winter of Code?",
    answer: "Please see the program timeline for more detailed information."
  },
  {
    title: "What programming language(s) should I know to participate in Winter of Code?",
    answer: "The programming language you need to know depends on which organization you are interested in working with. You should be familiar with the programming language(s) used by that organization."
  },
  {
    title: "Will everyone who participates as a student in Winter of Code get WoC schwags?",
    answer: "  Winter of Code schwags, access to Manning e-books, schwags from Google Developers, and Qwiklabs credits are only for top contributors of Winter of Code, not for everyone. However, we do promise to have a small token of appreciation in the form of schwags and certificates for everyone who participates in Winter of Code."
  },
  {
    title: "Can I submit more than one proposal?",
    answer: "Yes, each student may submit up to three proposals. However, only one per student may be accepted. No more than one proposal per student will be accepted, no matter how many proposals you submit."
  },
  {
    title: "Do I get paid for participating in Winter of Code?",
    answer: "No, but you get amazing schwags from Winter of Code and lots of fun memories in our open source journey."
  },
 
  {
    title: "I want to learn more about participating as a mentor in Winter of Code. Where can I find more information?",
    answer: "Read the Mentor Guide <How it Works> for more information on becoming a Winter of Code mentor. You must already be an active community member of the organization that you wish to mentor for. Fill up the form above in the Apply section and join us!"
  },
  {
    title: "What can I do to help spread the word about Winter of Code?",
    answer: "You can share the message by tweeting about us using the hashtag #WinterofCode or tagging us on your social media posts while you participate in the program or share the posters."
  },
  {
    title: "Can I participate in Winter of Code as both a mentor and a student?",
    answer: "No. We want to make sure that each project and student receives sufficient attention, and we feel this could create a bad experience for those involved. Please choose whether participation as a mentor or a student is more appealing to you and plan to apply accordingly."
  },
 
  {
    title: "What if I have more questions?",
    answer: `Feel free to mail us at lead@dscnsec.com`
  },
 
]
