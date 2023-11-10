/* eslint-disable react/prop-types */
import { IceCreamOption } from "../../../../constants/IceCreamOption";
import * as S from "./ResultOption.style";

function ResultOption({ result, nthChoiceHandler }) {
  const resultFlavor = IceCreamOption?.[result];

  return (
    <S.Container>
      <S.Title>너에게 이 맛을 추천해!</S.Title>
      <S.ContentContainer>{resultFlavor}</S.ContentContainer>
      <S.ButtonField>
        <S.Button
          onClick={() => {
            nthChoiceHandler(3);
          }}
        >
          이전으로
        </S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default ResultOption;
