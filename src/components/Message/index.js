import React from "react";
import "./style.css";

function Message(props) {
  return <h4 className={props.checkRight ? "message-correct" : 'message-incorrect'}>{props.message}</h4>;
}

export default Message;