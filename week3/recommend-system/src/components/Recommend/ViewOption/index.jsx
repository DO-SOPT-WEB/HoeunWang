/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Result from "./Result";
import { IceCreamOption } from "../../../constants/IceCreamOption";

function ViewOption({ selectedHandler, startHandler }) {
  const [nthChoice, setNthChoice] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const handleSelect = (flavor) => {
    setSelectedFlavor((prevFlavor) => {
      const combinedFlavor = prevFlavor ? `${prevFlavor}.${flavor}` : flavor;
      console.log(combinedFlavor);
      console.log(IceCreamOption?.[combinedFlavor]);
      return combinedFlavor;
    });
    console.log(IceCreamOption?.[selectedFlavor]);
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
      {nthChoice === 4 && (
        <Result
          result={IceCreamOption?.[selectedFlavor]}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
    </>
  );
}

export default ViewOption;
