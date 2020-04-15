import React from "react";

function SocialNetwork(props) {
  return (
    <div className="row d-flex justify-content-center">
      <ul className="social-network social-circle">
        <li>
          <a
            href="https://t.me/masihavafa"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
            title="telegram"
          >
            <span style={{ color: props.color }}>
              <i className="fab fa-telegram-plane"></i>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/masiha-vafa-443355138/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
            title="Linkedin"
          >
            {/* <img src="./img/linkedin.svg" alt="linkedin" /> */}
            <span style={{ color: props.color }}>
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/masihavafa"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
            title="twitter"
          >
            {/* <img src="./img/twitter.svg" alt="twitter" /> */}
            <span style={{ color: props.color }}>
              <i className="fab fa-twitter"></i>
            </span>
          </a>
        </li>
        <li>
          <a
            href="mailto:zahedivafa7@gmail.com?subject=fromWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
            title="Gmail"
          >
            {/* <img src="./img/mail.svg" alt="Gmail" /> */}
            <span style={{ color: props.color }}>
              <i class="fas fa-envelope"></i>
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MasihaVafa"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
            title="github"
          >
            {/* <img
              className="socialIconGit"
              src="./img/github.svg"
              alt="github"
            /> */}
            <span style={{ color: props.color }}>
              <i className="fab fa-github"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialNetwork;
