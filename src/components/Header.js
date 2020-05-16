import React from "react";
import { Link } from "react-router-dom";
import jump from "jump.js";
const Header = () => {
  const playScroll = (event) => {
    if (event.target.name === "about") {
      jump(".about");
    }
    if (event.target.name === "skills") {
      jump(".skills-banner");
    }
    if (event.target.name === "projects") {
      jump(".projectSection");
    }
  };

  return (
    <div className="row">
      <nav className="col-md-12 navbar navbar-expand-sm navbar-dark justify-content-center  ">
        <a className="col-md-4 navbar-brand ml-0 masihaVafaNav  d-none d-md-block">
          Masiha Vafa
        </a>

        <div className=" col-md-8  justify-content-center ">
          <ul className="navbar-nav ">
            <li className=" nav-item  ">
              <a name="about" onClick={playScroll} className="nav-link">
                About Me
              </a>
            </li>
            <li className=" nav-item ml-4">
              <a name="skills" onClick={playScroll} className="nav-link">
                Skills
              </a>
            </li>
            <li className=" nav-item ml-4">
              <a name="projects" onClick={playScroll} className="nav-link">
                Projects
              </a>
            </li>
            <li className=" nav-item ml-4">
              <a className="nav-link">Contact</a>
            </li>
            <li className=" nav-item ml-4">
              <Link to={"/blog"}>
                <a className="nav-link">blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
