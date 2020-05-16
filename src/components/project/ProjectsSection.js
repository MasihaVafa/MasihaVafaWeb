import React, { useState } from "react";
import Project from "./Project";
import { web, dataAnalyze } from "./ProjectsData";
const ProjectsSection = () => {
  const [projectTab, setProjectTab] = useState("all");
  const [setActive, setSetActive] = useState("all");
  const selectTab = (e) => {
    console.log("e is : " + e.target.value);
    setProjectTab(e.target.value);
  };

  return (
    <div className="container-fluid projectSection">
      <div className="row">
        <div className=" skills-banner">
          <div className="skill-image  d-flex align-items-center">
            <div className="caption ">
              {/* <img
                className="d-inline w-30"
                src="./img/projects.svg"
                alt="projects"
              /> */}
              <h2 className="d-inline">Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4 d-flex justify-content-center">
        <button
          onClick={selectTab}
          value="all"
          type="button"
          className={
            projectTab === "all"
              ? "btn active btn-outline-primary"
              : "btn  btn-outline-primary"
          }
        >
          ALL
        </button>
        <button
          onClick={selectTab}
          value="web"
          type="button"
          className={
            projectTab === "web"
              ? "btn active  ml-4 btn-outline-primary"
              : "btn  ml-4 btn-outline-primary"
          }
        >
          WEB
        </button>
        <button
          onClick={selectTab}
          value="data"
          type="button"
          className={
            projectTab === "data"
              ? "btn active ml-4 btn-outline-primary"
              : "btn  ml-4 btn-outline-primary"
          }
        >
          DATA ANALYSIS
        </button>
        <button
          onClick={selectTab}
          value="graphics"
          type="button"
          className={
            projectTab === "graphic"
              ? "btn active ml-4 btn-outline-primary"
              : "btn  ml-4 btn-outline-primary"
          }
        >
          GRAPHICS
        </button>
      </div>
      <div className="container">
        <div className="row mb-3">
          {projectTab === "all"
            ? web.concat(dataAnalyze).map((project) => (
                <div className="col-lg-4 col-md-6 mb-3">
                  <Project project={project} />
                </div>
              ))
            : projectTab === "web"
            ? web.map((project) => (
                <div className="col-lg-4 col-md-6 mb-3">
                  <Project project={project} />
                </div>
              ))
            : projectTab === "data"
            ? dataAnalyze.map((project) => (
                <div className="col-lg-4 col-md-6 mb-3">
                  <Project project={project} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
