import React from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
const Skill = props => {
  const {  percentage, img } = props.skill;
  return (
    <section className="eachSkill">
      <CircularProgressbarWithChildren
        value={percentage}
        // text={`${skillName}`}
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLineca: "round",

          // Text size
          textSize: "13px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 1,

          // Can specify path transition in more detail, or remove it entirely
          pathTransition: "stroke-dashoffset 0.5s ease 0s",

          // Colors
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,

          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7"
        })}
      >
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img style={{ width: "53%", marginTop: -5 }} src={img} alt="doge" />
      </CircularProgressbarWithChildren>
    </section>
  );
};

export default Skill;
