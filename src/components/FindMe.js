import React, { useState } from "react";
import "./findMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { linkedInURL, gitHubURL, email } from "../constants";

const FindMe = () => {
  return (
    <div id="findMe">
      <h3 className="find-me-heading">Find Me</h3>
      <div className="find-me-icons-container">
        <a href={linkedInURL} target="_blank" className="find-me-icon">
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        </a>
        <a href={gitHubURL} target="_blank" className="find-me-icon">
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </a>
        <a href={email} className="find-me-icon">
          <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default FindMe;
