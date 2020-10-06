import React from "react";
import { SyncLoader as Spinner } from "react-spinners";
import { WrapperGlobal } from "../Layout";

import "./styles.css";

function Loading() {
  return (
    <WrapperGlobal>
      <Spinner sizeUnit="px" size={15} css="margin: auto" color="#5db6a0" />
    </WrapperGlobal>
  );
}

export default Loading;
