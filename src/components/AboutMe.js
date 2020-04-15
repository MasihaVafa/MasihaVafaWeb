import React from "react";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="about ">
        <div className="row mt-5 ">
          <div className="col-md-8">
            <h2>WHO AM I ?</h2>
            <div className="aboutMe-note">
              <p>
                Software engineer with 4 year of experiment in software
                development. Have specialized in front-end development and data
                analyzing with latest technologies. I like To take a challenging
                and high performance oriented role in the field of Software
                engineering and implement the expertise and experience gained in
                this field to develop ingeniously project
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center ">
            <img
              className="WhoAmI d-none d-md-block"
              src="./img/work.svg"
              alt="masiha zahedivafa"
            />
          </div>
        </div>
        {/* section 2 */}
        <div className="row mt-3">
          <div className="col-md-4 d-flex align-items-center ">
            <img
              className="WhoAmI d-none d-md-block"
              src="./img/graduated.svg"
              alt="education"
            />
          </div>
          <div className="col-md-8">
            <h2>My Education</h2>
            <div className="aboutMe-note">
              <div className="education">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <img className="uniLogo" src="./img/iust.png" alt="usc" />
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    {" "}
                    <b> 2018 - 2020</b>
                  </div>
                  <div className="col-sm-6 text-center">
                    <b>MS</b> in <b> Information Technology Managment</b> <br />{" "}
                    at Iran University Of Science & Technology
                  </div>
                </div>
                <br />
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3 d-flex justify-content-center">
                    <img className="uniLogo" src="./img/usc.png" alt="usc" />
                  </div>
                  <div className="col-sm-3 d-flex justify-content-center">
                    {" "}
                    <b> 2013 - 2017</b>
                  </div>
                  <div className="col-sm-6 text-center">
                    <b>BS</b> in <b> Software Engineering</b> <br /> at
                    University Of Science & Culture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
