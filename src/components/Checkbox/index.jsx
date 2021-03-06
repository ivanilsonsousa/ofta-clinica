import React, { useContext, createContext, useEffect, useState } from "react";
import "pretty-checkbox";

import "./styles.css";

const ContextGroupBox = createContext();

function GroupBox(props) {
  const { name, tam, label, className, setValue, children, onChange } = props;
  const [current, setCurrent] = useState("");

  return (
    <ContextGroupBox.Provider
      value={{ name, setValue, setCurrent, current, onChange }}
    >
      <div className={`col-md-${tam || "12"} mb-3 pt-2 ${className || ""}`}>
        <div className="field a-field a-field_a2">
          <span className="mr-2">{label} </span>
          {children}
        </div>
      </div>
    </ContextGroupBox.Provider>
  );
}

function Checkbox({ label, value, active, onClick }) {
  const { name, setValue, current, setCurrent, onChange } = useContext(
    ContextGroupBox
  );

  function handleClick(e) {
    if (onClick) onClick();
    setValue(value);
    setCurrent(value);

    onChange(e);
  }

  useEffect(() => {
    if (active) active(current !== value);
  }, [current]);

  return (
    <div className="pretty p-default p-curve">
      <input
        type="radio"
        name={name}
        value={value}
        onClick={(e) => handleClick(e)}
      />
      <div className="state p-primary-o">
        <label> {label || value}</label>
      </div>
    </div>
  );
}

export default Checkbox;

export { GroupBox, Checkbox };
