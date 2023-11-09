/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Result from "./Result";

const components = [First, Second, Third, Result];

function ViewOption({ selectedHandler, startHandler }) {
  const [nthChoice, setNthChoice] = useState(1);
  const [result, setResult] = useState("");

  const handleSelect = (selected) => {
    setResult((prevResult) => prevResult + selected + ".");
  };

  const CurrentComponent = components[nthChoice - 1];

  return (
    <>
      <CurrentComponent
        selectedHandler={selectedHandler}
        startHandler={startHandler}
        resultHandler={handleSelect}
        nthChoiceHandler={(number) => {
          setNthChoice(number);
        }}
      />
    </>
  );
}

export default ViewOption;
