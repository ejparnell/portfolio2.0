import React from "react";
import "./findMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { linkedInURL, gitHubURL, email } from "../constants";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconEffect from "./IconEffect";

const FindMe = () => {
  const desktopView = useMediaQuery("(min-width:500px)");

  return (
    <div id="findMe">
      <h3 className="find-me-heading">Find Me</h3>
      <div
        className={
          desktopView
            ? "find-me-icons-container"
            : "find-me-icons-container-phone-view"
        }
      >
        <IconEffect rotation={20} timing={200}>
          <a href={linkedInURL} target="_blank" className="find-me-icon">
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
          </a>
        </IconEffect>
        <IconEffect rotation={20} timing={200}>
          <a href={gitHubURL} target="_blank" className="find-me-icon">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          </a>
        </IconEffect>
        <IconEffect rotation={20} timing={200}>
          <a href={email} className="find-me-icon">
            <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" />
          </a>
        </IconEffect>
      </div>
    </div>
  );
};

export default FindMe;
