import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import {CircleStarFull, StarFull, StarEmpty, CircleStarEmpty } from "../../Components/Icons";

const place = "Kolkata, India";

const Timeline = () => {
  const Items = [
    {
      title: "14th November",
      active: true,
      contentTitle: "Project Application Starts",
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "23 November",
      active: undefined,
      contentTitle: "Organisations Announced",
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "28 November",
      contentTitle: "Student Application Starts",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "14 December",
      contentTitle: "Students announced, projects matched by organizations",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "15 December - 18 December",
      contentTitle: "Community Bonding period",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "18 December - 27 December",
      contentTitle: "Phase 1",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "28 December & 29 December",
      contentTitle: "First Evaluation",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "30 December - 12 January",
      contentTitle: "Phase 2",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "12 January - 13 January",
      contentTitle: "Second Evaluation",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "19 January",
      contentTitle: "Successful Students Announced",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "23 January",
      contentTitle: "All Schwags sent to Successful Students",
      active: undefined,
      contentText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];

  return (
    <section className="section-timeline">
      <div className="row">
        <h1 className="section-title">Timeline</h1>
        <VerticalTimeline className="vertical-timeline">
          {Items.map((item, index) => {
             if(item.active === undefined) {
                 return (
                    <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    date={item.title}
                    iconStyle={{ background: "#204987", color: "#fff" }}
                    icon={<StarEmpty fill="#fff" />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {item.contentTitle}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">{place}</h4>
                    <p id="vertical-timeline-element-description">
                      {item.contentText}
                    </p>
                  </VerticalTimelineElement>
                 )
             } else if(item.active === false) {
                 console.log("3e42112")
                return (
                    <VerticalTimelineElement
                contentStyle={{
                  background: "#2ecc71",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #2ecc71",
                }}
                key={index}
                className="vertical-timeline-element--work"
                date={item.title}
                iconStyle={{ background: "#2ecc71", color: "#fff" }}
                icon={<CircleStarEmpty fill="#fff" />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.contentTitle}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{place}</h4>
                <p id="vertical-timeline-element-description">
                  {item.contentText}
                </p>
              </VerticalTimelineElement>
                )
             } else {
                 return (
                    <VerticalTimelineElement
                    contentStyle={{
                      background: "#204987",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid #204987",
                    }}
                    key={index}
                    className="vertical-timeline-element--work"
                    date={item.title}
                    iconStyle={{ background: "#204987", color: "#fff" }}
                    icon={<StarFull fill="#fff" />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {item.contentTitle}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">{place}</h4>
                    <p id="vertical-timeline-element-description">
                      {item.contentText}
                    </p>
                  </VerticalTimelineElement>
                 )
             }
          })}

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<CircleStarFull fill="#fff" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
