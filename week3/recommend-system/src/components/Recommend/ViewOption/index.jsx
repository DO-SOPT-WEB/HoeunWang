/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewOption.style";

function ViewOption({ selectedHandler, startHandler, resetHandler }) {
  const [nthChoice, setNthChoice] = useState(1);
  const [selectedFlavorFirst, setSelectedFlavorFirst] = useState(null);
  const [selectedFlavorSecond, setSelectedFlavorSecond] = useState(null);
  const [selectedFlavorThird, setSelectedFlavorThird] = useState(null);

  const handleSelectFirst = (flavor) => {
    setSelectedFlavorFirst(flavor);
  };
  const handleSelectSecond = (flavor) => {
    setSelectedFlavorSecond(flavor);
  };
  const handleSelectThird = (flavor) => {
    setSelectedFlavorThird(flavor);
  };

  const handleRestart = () => {
    resetHandler(); // Call the resetHandler to reset the state in the parent component
    setNthChoice(1); // Reset nthChoice to 1 to start from the first step again
  };

  return (
    <>
      {nthChoice === 1 && (
        <First
          selectedHandler={selectedHandler}
          startHandler={startHandler}
          resultHandler={handleSelectFirst}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 2 && (
        <Second
          resultHandler={handleSelectSecond}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 3 && (
        <Third
          resultHandler={handleSelectThird}
          nthChoiceHandler={(number) => {
            setNthChoice(number);
          }}
        />
      )}
      {nthChoice === 4 && (
        <S.Container>
          <S.Title>너에게 이 맛을 추천해!</S.Title>
          <S.ContentContainer>
            {
              IceCreamOption?.[selectedFlavorFirst]?.[selectedFlavorSecond]?.[
                selectedFlavorThird
              ]
            }
          </S.ContentContainer>
          <S.ButtonField>
            <S.Button onClick={handleRestart}>다시하기</S.Button>
          </S.ButtonField>
        </S.Container>
      )}
    </>
  );
}

export default ViewOption;
