/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

function ViewOption({ selectedHandler, startHandler }) {
  const [nthChoice, setNthChoice] = useState(1);
  const [result, setResult] = useState("");

  const handleSelect = (selected) => {
    setResult((prevResult) => prevResult + selected + ".");
  };
  return (
    <>
      {nthChoice === 1 && (
        <First
          selectedHandler={selectedHandler}
          startHandler={startHandler}
          resultHandler={handleSelect}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 2 && (
        <Second
          resultHandler={handleSelect}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 3 && (
        <Third
          resultHandler={handleSelect}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
    </>
  );
}
export default ViewOption;
