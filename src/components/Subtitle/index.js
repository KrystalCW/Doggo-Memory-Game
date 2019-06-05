import React from "react";
import "./style.css";

function Subtitle(props) {
  return <h3 className="subtitle">{props.children}</h3>;
}

export default Subtitle;