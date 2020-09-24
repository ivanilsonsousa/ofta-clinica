import React from "react";

import "./styles.css";

export default function Section(props) {
  return (
    <>
      <div className="wrapper-session d-flex align-items-baseline">
        {props.img}
        <h4 className="ml-2">{props.title}</h4>
        <hr />
      </div>
    </>
  );
}
