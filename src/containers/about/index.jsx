import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { DiLinux, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import Profile from "../../assets/agungadi.jpg";

const personalDetails = [
  { label: "Name", value: "Agung Adi Saputra" },
  { label: "Age", value: "26" },
  { label: "Address", value: "Daerah Istimewa Yogyakarta, Indonesia" },
  { label: "Email", value: "Agungadisaputra05@gmail.com" },
  { label: "Contact Me", value: "+62 82313764148" },
];

const jobSummary =
  "Hallo, I am a dedicated and detail-oriented Support Engineer with over two years of experience in ensuring the reliability, performance, and scalability of web applications and systems. My role involves diagnosing and resolving technical issues, optimizing server performance, and collaborating with cross-functional teams to deliver seamless user experiences. I have a strong foundation in technologies such as React, Next.js, Node.js, MySQL, and PostgreSQL, as well as expertise in containerization using Docker. My problem-solving skills and attention to detail enable me to identify root causes effectively and implement solutions that enhance system performance. With a keen interest in front-end and back-end development, as well as DevOps, I am committed to continuously developing my skills to provide innovative, efficient, and scalable solutions for businesses.";

const About = () => {
  return (
    <section id="about" className="about">
      {/* Header Section */}
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={20} />} />

      {/* Content Section */}
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1}
            delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0)",
            }}
            easeType="ease-in-out"
          >
            <h3 className="about__content__title">Support Engineer</h3>
            <p className="about__content__summary">{jobSummary}</p>
          </Animate>

          {/* Personal Details */}

          <Animate
            play
            duration={1}
            delay={0.5}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0)",
            }}
            easeType="ease-in-out"
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="label">{item.label} :</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicewrapper">
          <Animate
            play
            duration={1}
            delay={0.5}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0)",
            }}
            easeType="ease-in-out"
          >
            <div className="about__content__servicewrapper__pic">
              <img src={Profile} alt="picprofile" />
            </div>

            <div className="about__content__servicewrapper__inner">
              <div>
                <FaDev size={50} color="#499eff" />
              </div>
              <div>
                <DiAndroid size={50} color="#13ff0f" />
              </div>
              <div>
                <FaDatabase size={50} color="var(--color-slate-300)" />
              </div>
              <div>
                <DiLinux size={50} color="#ffc942" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
