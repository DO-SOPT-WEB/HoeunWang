/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewOption.style";

function ViewOption({ selectedHandler, startHandler }) {
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
        </S.Container>
      )}
    </>
  );
}

export default ViewOption;
