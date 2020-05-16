import React from "react";
import Skill from "./skills/Skill";
const DashWrapper = (props) => {
  return (
    <div className="col-md-10  web-development ">
      <div className="circleSkillsWrapper">
        <div className="skills  w-100">
          <div className="row">
            {props.skillCat.map((skill) => {
              return (
                <div className="skillCircle col-md-2 col-sm-6  col-6">
                  <Skill key={skill.id} skill={skill} />
                  <span className=" skillName d-flex justify-content-center">
                    {skill.skillName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashWrapper;
