/* eslint-disable react/prop-types */
import { useEffect } from "react";
import * as S from "./Result.style";

function Result({ result, nthChoiceHandler }) {
  useEffect(() => {
    console.log(result);
  });
  return (
    <S.Container>
      <S.Title>너에게 이 맛을 추천해!</S.Title>
      <S.ContentContainer></S.ContentContainer>
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

export default Result;
