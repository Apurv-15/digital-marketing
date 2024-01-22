// import React from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import "./Service.css"; // Import your CSS file
// import { Button, CardActionArea,CardMedia, CardActions } from "@mui/material";

// import zoro from "../../imagess/zoro.jpeg"

// const serviceData = [
//   {
//     title: "Service 1",
//     description: "Description",
    
//   },
//   {
//     title: "Service 2",
//     description: "Description",
//   },
//   {
//     title: "Service 3",
//     description: "Description",
//   },
//   {
//     title: "Service 4",
//     description: "Description",
//   },
//   {
//     title: "Service 5",
//     description: "Description",
//   },
//   {
//     title: "Servicehgkug hkv",
//     description: "Description",

//   },
// ];

// function Service() {
//   return (
//     <div className="root">
//       <Grid container spacing={3}>
//         {serviceData.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={zoro}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" component="p">
//                     {service.description}
//                     </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary">
//                   {service.img}
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default Service;


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../services/styles";
import { experiences } from "../services/constants";
import { SectionWrapper } from "../services/hoc";
import { textVariant } from "../services/utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            // alt={experience.title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {/* {experience.company_name} */}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Service = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
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
