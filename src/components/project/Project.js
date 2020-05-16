import React from "react";
import "./project.scss";
function Project(props) {
  const {
    name,
    technologies,
    img,
    haveDemo,
    demoLink,
    github,
    codeLink,
  } = props.project;
  return (
    <div className="card">
      <img
        className="project-img card-img-top"
        // src="./img/shoppingCart.jpg"
        src={`./img/${img}.jpg`}
        alt="youtubeDash"
      />
      {/* overlay on hover */}
      <div className="overlay">
        <div className="overBtn ">
          <h5 className="overlay-title mb-3 text-light">{name}</h5>
          {/* check if source code is available */}
          {github ? (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light btn-sm "
            >
              <i class="fab fa-github"></i> Github
            </a>
          ) : null}
          {haveDemo && github === true ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light btn-sm ml-2 "
            >
              <i class="far fa-eye"></i> view
            </a>
          ) : (
            <a
              style={{ width: 150 }}
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light btn-sm ml-2 "
            >
              <i class="far fa-eye"></i> view
            </a>
          )}
        </div>
      </div>
      <div className="card-body">
        <h5 className="mb-4">{name}</h5>
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        {technologies.map((tech) => (
          <div className="d-inline rounded  mr-1 p-2 bg-secondary text-white">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
