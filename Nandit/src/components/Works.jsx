import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWraper } from "../hoc";
import projects from "../assets/workdonebyme.js";
import { fadeIn, textVariant } from "../utils/motion";
import external_link from "../assets/external-link.png";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_preview_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] h-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-between card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(live_preview_link, "_blank")}
            >
              <img src={external_link} alt="Live Preview" className="w-1/2 h-1/2 object-contain mix-blend-hard-light" />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="Source Code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] sm:text-[16px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos. They reflect my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project._id} index={project._id} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Works, "work");
