import React from "react";
import "../components/style.css";
import PayDetails from "../components/payDetails";
import Language from "../components/language";

import Days from "../components/trainingDays";
function body() {
  return (
    <>
      <PayDetails />
      <Days />
      <Language />
    </>
  );
}

export default body;
