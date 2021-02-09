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

const Skills = () => {
  const svgHeight = "100";
  const svgWidth = "100";

  return (
    <div className="skills-header">
      <h3>Skills</h3>
      <div className="skills-container">
        <SVGReact height={svgHeight} width={svgWidth} />
        <SVGmongoDB height={svgHeight} width={svgWidth} />
        <SVGgraphql height={svgHeight} width={svgWidth} />
        <SVGhtml5 height={svgHeight} width={svgWidth} />
        <SVGjavascript height={svgHeight} width={svgWidth} />
        <SVGjest height={svgHeight} width={svgWidth} />
        <SVGnode height={svgHeight} width={svgWidth} />
        <SVGphp height={svgHeight} width={svgWidth} />
        <SVGpostgresql height={svgHeight} width={svgWidth} />
      </div>
    </div>
  );
};

export default Skills;
