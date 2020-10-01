import React from "react";

import "./styles.css";

function Select(props) {
  return (
    <div className="col-md-3 mb-3 pt-2">
      <label className="field a-field a-field_a2">
        <select name="origem" className="op-teste" id="">
          <option value="teste">ISC Sobral</option>
          <option value="teste">ISC Mucambo</option>
          <option value="teste">ISC Barroquinha</option>
        </select>
      </label>
    </div>
  );
}

export default Select;
