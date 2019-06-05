import React from "react";
import "./style.css";

function DoggosCard(props) {

    return (
    <div className="card">
      <div className='img-container'>
        <img alt={props.name} src={props.image} onClick={() => props.iWasClicked(props.id)} data-id={props.id} />
      </div>
    </div>
    );
  }

export default DoggosCard;
