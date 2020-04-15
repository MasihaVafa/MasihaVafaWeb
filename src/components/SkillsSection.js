import React, { useEffect, useState } from "react";
import { WebData, LanguageData, SoftwareData, DataAnalyse } from "./SkillsData";
import { Tabs } from "antd";
import DashWrapper from "./DashWrapper";
const { TabPane } = Tabs;

const SkillsSection = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = () => {
    const screenSize = window.innerWidth;
    const result = screenSize <= 800 ? "top" : "left";
    setTabPosition(result);
  };
  useEffect(changeTabPosition, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="skills-container">
          <div className="row">
            <div className=" skills-banner">
              <div className="skill-image  d-flex align-items-center">
                <div className="caption ">
                  <img
                    className="d-inline"
                    src="./img/engineer.svg"
                    alt="usc"
                  />
                  <h2 className="d-inline">My Skills</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row skills-tab">
            <Tabs tabPosition={tabPosition}>
              <TabPane tab="Web & Mobile" key="1">
                <DashWrapper skillCat={WebData} />
              </TabPane>
              <TabPane tab="Programming Languages" key="2">
                <DashWrapper skillCat={LanguageData} />
              </TabPane>
              <TabPane tab="Graphic Software" key="3">
                <DashWrapper skillCat={SoftwareData} />
              </TabPane>
              <TabPane tab="Data Analyzing " key="4">
                <DashWrapper skillCat={DataAnalyse} />
              </TabPane>
            </Tabs>
            {/* end tab */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
