import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa6";
import { SiGrafana } from "react-icons/si";
import { SiSplunk } from "react-icons/si";
import { motion } from "framer-motion";
import "./style.scss"; // Import file SCSS

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="Skills" icon={<BsInfoCircleFill size={20} />} />
      <div className="skills__content">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="skills__title"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="skills__icons"
        >
          {[
            { Icon: TbBrandNextjs, color: "slate", duration: 2.5 },
            { Icon: RiReactjsLine, color: "cyan", duration: 3 },
            { Icon: FcLinux, color: "", duration: 5 },
            { Icon: SiMongodb, color: "green", duration: 2 },
            { Icon: BiLogoPostgresql, color: "sky", duration: 6 },
            { Icon: FaNodeJs, color: "green", duration: 4 },
            { Icon: FaDocker, color: "blue", duration: 8 },
            { Icon: SiGrafana, color: "orange", duration: 7 },
            { Icon: DiRedis, color: "red", duration: 9 },
            { Icon: SiSplunk, color: "gray", duration: 2.5 },
          ].map(({ Icon, color, duration }, index) => (
            <motion.div
              key={index}
              variants={iconvariants(duration)}
              initial="initial"
              animate="animate"
              className={`skills__icon skills__icon--${color}`}
            >
              <Icon className="skills__icon-svg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
