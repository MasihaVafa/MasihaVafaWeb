import React from "react";
import SocialNetwork from "./SocialNetwork";
import { Link } from "react-router-dom";

function BlogWrapper() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#bfdce3", padding: 0, margin: 0 }}
    >
      <div className="row " style={{ height: "100vh" }}>
        <div className="col-md-6  d-flex align-items-center justify-content-center">
          <div className="d-flex ">
            <img
              style={{ width: "100%", height: "auto" }}
              src="./img/trufffle.gif"
              alt="trufffle"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center  ">
          <div className=" ">
            <h2 className="text-center mb-5 " style={{ color: "#06345f" }}>
              Blog section under construction
            </h2>
            <div className=" d-flex justify-content-center">
              <Link to="/">
                <span
                  style={{
                    fontSize: " 20px",
                    color: "white",
                    backgroundColor: "#06345f",
                    padding: "1rem",
                    borderRadius: "1rem",
                  }}
                >
                  <i class="fas fa-undo"></i> back
                </span>
              </Link>
            </div>
            <h3 className="text-center mt-5 " style={{ color: "#06345f" }}>
              You can fine me at
            </h3>
            <SocialNetwork color={"#06345f"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogWrapper;
