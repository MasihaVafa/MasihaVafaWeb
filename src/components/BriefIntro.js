import React from "react";
import Header from "./Header";
import SocialNetwork from "./SocialNetwork";

const BriefIntro = () => {
  return (
    <div className="header">
      <div className="container-fluid ">
        {/* <!--Navbar start--> */}
        <Header />
        {/* <!-- End Navbar --> */}

        {/* <!-- Greating --> */}
        <div className=" d-flex justify-content-center">
          <div className="row ">
            <div className="hello  col-md-6 ">
              <div>
                <h2>HELLO EVERYBODY</h2>
                <br />
                <h2>I AM</h2>
                <br />
                <h1>
                  <b> MASIHA VAFA </b>
                </h1>
                <br />
                <br />
                <h2>SOFTWARE DEVELOPER</h2>
                <h2>&</h2>
                <h2>DATA ANALYSIS</h2>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="masihaimg">
                <img
                  className="masiha mb-2 "
                  src="./img/masiha.png"
                  alt="masiha"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- social media contacts --> */}
        <SocialNetwork color={"white"} />
        {/* <!-- end social media contacts --> */}
      </div>
      {/* <!-- end Greating --> */}
    </div>
  );
};
export default BriefIntro;
