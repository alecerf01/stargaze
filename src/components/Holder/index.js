import React from "react";
import "./style.css";

function Holder(props) {
  return <div className="holder">{props.children}</div>;
}

export default Holder;