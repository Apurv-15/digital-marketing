// import React from "react";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";
// import './Service.css' // Import the new CSS file

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../services/styles";
// import { experiences } from "../services/constants";
// import { SectionWrapper } from "../services/hoc";
// import { textVariant } from "../services/utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       className="vertical-timeline-element"
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             className="w-[60%] h-[60%] object-contain"
//             alt={experience.title}
//           />
//         </div>
//       }
//     >
//       <div className="card">
//         <div className="front">
//           {/* Front side content */}
//           <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//           {/* Additional front side content can go here */}
//         </div>
//         <div className="back">
//           {/* Back side content */}
//           <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//           <ul className="mt-5 list-disc ml-5 space-y-2">
//             {experience.points.map((point, index) => (
//               <li
//                 key={`experience-point-${index}`}
//                 className="text-white-100 text-[14px] pl-1 tracking-wider"
//               >
//                 {point}
//               </li>
//             ))}
//           </ul>
//           {/* Additional back side content can go here */}
//         </div>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

// const Service = () => {
//   return (
//     <div>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard key={`experience-${index}`} experience={experience} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Service, "work");

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
