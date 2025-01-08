import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "./utils";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader headerText="resume " icon={<BsInfoCircleFill size={20} />} />

      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header">Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="#fff">
            {EXPERIENCES.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__vertical-element"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-role">{item.role}</h3>

                  <h4 className="vertical-company">{item.company}</h4>
                  <p>{item.description}</p>
                  <p>{item.technologies}</p>
                </div>
              </VerticalTimelineElement>
            ))}
            ,
          </VerticalTimeline>
        </div>
        <div className="timeline__pendidikan">
          <h3 className="timeline__pendidikan__header">Education</h3>
        </div>
      </div>
    </section>
  );
};

export default Resume;
