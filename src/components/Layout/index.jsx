import React from "react";

import "./styles.css";

function WrapperGlobal(props) {
  return <div className="wrapper-global m-0 p-0">{props.children}</div>;
}

function WrapperSecondary(props) {
  return <div className="container-fluid p-0 m-0">{props.children}</div>;
}

function WrapperContent(props) {
  return (
    <div className="container-fluid m-0 pt-3" {...props}>
      {props.children}
    </div>
  );
}

export { WrapperGlobal, WrapperSecondary, WrapperContent };
