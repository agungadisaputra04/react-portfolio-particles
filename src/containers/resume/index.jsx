import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "./utils";
import { PENDIDIKAN } from "./utils";
import "./style.scss";
import { HiAcademicCap } from "react-icons/hi2";
import { FaBookSkull } from "react-icons/fa6";

const Resume = () => {
  const iconStyle = {
    background: "rgba(18, 12, 19, 0.9)",
    color: "var(--color-slate-200)",
  };

  return (
    <section id="resume" className="resume">
      <PageHeader headerText="Journey " icon={<BsInfoCircleFill size={20} />} />

      <div className="timeline">
        {/* Experience Section */}
        <div className="timeline__experience">
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="timeline__experience__header"
          >
            Experience
          </motion.h3>
          <VerticalTimeline layout={"1-column"} lineColor="#4B0082">
            {EXPERIENCES.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__vertical-element"
                contentStyle={{
                  background: "none",
                  color: `var(--color-slate-200)`,
                  // border: "2px solid",
                  // borderImage:
                  //   "linear-gradient(90deg, rgba(75, 0, 130, 0.9), rgba(138, 43, 226, 0.9)) 1",
                  // animation: "borderAnimation 3s infinite linear",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  // padding: '15px',
                }}
                icon={<HiAcademicCap />}
                iconStyle={iconStyle}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-role">{item.role}</h3>
                  <h4 className="vertical-company">{item.company}</h4>
                  <p>{item.description}</p>
                  <p>{item.technologies}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education Section */}
        <div className="timeline__pendidikan">
          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="timeline__experience__header"
          >
            Education
          </motion.h3>
          <VerticalTimeline layout={"1-column"} lineColor="#4B0082">
            {PENDIDIKAN.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="timeline__experience__vertical-element"
                contentStyle={{
                  background: "none",
                  color: `var(--color-slate-200)`,
                  // border: "2px solid",
                  // borderImage:
                  //   "linear-gradient(90deg, rgba(75, 0, 130, 0.9), rgba(138, 43, 226, 0.9)) 1",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  // paddingTop: '1px 30px',
                }}
                icon={<FaBookSkull />}
                iconStyle={iconStyle}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-role">{item.jurusan}</h3>
                  <h4 className="vertical-company">{item.year}</h4>
                  <p>{item.name}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
