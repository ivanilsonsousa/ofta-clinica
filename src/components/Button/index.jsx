import React from "react";
import { ClipLoader as Spinner } from "react-spinners";

import "./styles.css";

function Button({ cancel, className, onClick, text, load }) {
  return (
    <button
      className={`button-default ${
        cancel ? "cancel" : "confirm"
      }  ${className} ${load && "load"}`}
      onClick={() => (onClick ? onClick() : {})}
      disabled={load}
    >
      {text ? text : "Ok"}{" "}
      {load && (
        <Spinner sizeUnit="px" css="margin-left: 5px" size={15} color="#fff" />
      )}
    </button>
  );
}

export default Button;
