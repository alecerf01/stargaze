import React from "react";
import "./index.css";

function Holder(props) {
  return <div className="holder">{props.children}</div>;
}

export default Holder;