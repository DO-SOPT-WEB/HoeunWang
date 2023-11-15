import { useEffect, useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewOption.style";
import { IceCreamImg } from "../../../constants/IceCreamImg";

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
    resetHandler();
    setNthChoice(1);
  };

  const finalFlavor =
    IceCreamOption?.[selectedFlavorFirst]?.[selectedFlavorSecond]?.[
      selectedFlavorThird
    ];

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
            <S.ImageContainer>
              <S.Image src={IceCreamImg[finalFlavor.key]} alt="Ice Cream" />
            </S.ImageContainer>
            {finalFlavor.value}
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
