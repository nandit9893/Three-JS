import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWraper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" options={{max: 45, scale: 1, speed: 450}}>
          <img src={icon} className="w-40 h-40 object-contain" alt="" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="mt-28">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introuduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm skilled software devleloper with experience in JavaScript, C, C++, and expertise in frameworks like React.js, Node.js, and Express.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </div>
  );
};

export default SectionWraper(About, "about");
