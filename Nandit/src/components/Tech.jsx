import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { technologies } from "../constant";

const Tech = () => {
  return (
    <div className="grid grid-cols-2 gap-10 cursor-pointer sm:grid-cols-7">
      {
        technologies.slice(0, 14).map((technology, index) => (
          <div className="w-36 h-36 flex flex-col" key={index}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-xl">{technology.name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default SectionWraper(Tech, "");
