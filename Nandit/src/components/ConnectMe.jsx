import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWraper } from "../hoc";
import quickAccess from "../assets/quicklinks.js";

const ConnectMe = () => {
  return (
    <div className="sm:mx-12 mx-2">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Connect Me</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer and Full Stack Developer. Here are some of my profile links to connect with me and explore platforms where I showcase my coding skills.
      </motion.p>
      <div className="mt-20 grid sm:grid-cols-4 grid-cols-2 gap-10">
        {
          quickAccess.map((item) => (
            <div key={item._id} className="cursor-pointer flex flex-col justify-center items-center bg-tertiary sm:p-10 p-3 shadow-2xl rounded-lg gap-3">
              <img src={item.icon} className="sm:w-28 sm:h-28 w-14 h-14 object-contain rounded-2xl" alt={item.titile} onClick={()=>window.open(item.profile_link, "_blank")}/>
              <p className="sm:text-xl text-xs">{item.titile}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SectionWraper(ConnectMe, "");