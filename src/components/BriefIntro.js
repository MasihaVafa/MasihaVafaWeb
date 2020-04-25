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
                <br />
                <br />
                <h1 className="shine">MASIHA VAFA</h1>
                <br />
                <h5 className="text-light">SOFTWARE DEVELOPER </h5>
                <h5 className="text-light"> & </h5>
                <h5 className="text-light">DATA ANALYSIS </h5>
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
