import React from "react";
import "./style.css";

function Score(props) {
  return <h4 className="score">{props.children}</h4>;
}

export default Score;