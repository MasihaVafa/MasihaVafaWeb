import React from "react";
import SocialNetwork from "./SocialNetwork";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="">
      <div className="row ">
        <div className="col-12 " style={{ padding: 0 }}>
          <div className="bg-dark p-3">
            <h4 className="text-center text-light mb-3">You Can Find Me At</h4>
            <SocialNetwork />
            <div className="pt-3 text-center text-light">
              &copy;Copyright
              <span> </span>
              {date} <a href="http://masihavafa.ir">MasihaVafa</a> | All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
