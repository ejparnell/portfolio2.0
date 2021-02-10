import React from "react";
import SVGmongoDB from "./svgs/SVGmongoDB";
import SVGgraphql from "./svgs/SVGgraphql";
import SVGhtml5 from "./svgs/SVGhtml5";
import SVGjavascript from "./svgs/SVGjavascript";
import SVGjest from "./svgs/SVGjest";
import SVGnode from "./svgs/SVGnode";
import SVGphp from "./svgs/SVGphp";
import SVGpostgresql from "./svgs/SVGpostgresql";
import SVGReact from "./svgs/SVGreact";
import "./skills.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Skills = () => {
  const svgHeight = "100";
  const svgWidth = "100";
  const desktopView = useMediaQuery("(min-width:500px)");

  return (
    <div className="skills-header">
      <h3>Skills</h3>
      <div className={desktopView ? "skills-container" : "skills-container-phone-view"}>
        <div>
          <SVGReact height={svgHeight} width={svgWidth} />
          <SVGmongoDB height={svgHeight} width={svgWidth} />
          <SVGgraphql height={svgHeight} width={svgWidth} />
        </div>
        <div>
          <SVGhtml5 height={svgHeight} width={svgWidth} />
          <SVGjavascript height={svgHeight} width={svgWidth} />
          <SVGjest height={svgHeight} width={svgWidth} />
        </div>
        <div>
          <SVGnode height={svgHeight} width={svgWidth} />
          <SVGphp height={svgHeight} width={svgWidth} />
          <SVGpostgresql height={svgHeight} width={svgWidth} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
