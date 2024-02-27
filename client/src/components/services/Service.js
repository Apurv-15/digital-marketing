import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "./Service.css";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../services/styles";
import { experiences } from "../services/constants";
import { SectionWrapper } from "../services/hoc";
import { textVariant } from "../services/utils/motion";
import "./Service.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backfaceVisibility: "visible",
        background: "#000",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div className="inner123">
        <div className="back">
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>

          <ul className="">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="fromt">
          <h1>{experience.title}</h1>
          <img
            src={experience.icon}
            // alt={experience.title}
            className="icon1"
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Service = () => {
  return (
    <div className="out">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Service, "work");
