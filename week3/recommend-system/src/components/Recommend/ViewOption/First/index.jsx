/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./First.style";

const options = [
  { label: "초코", value: "choco" },
  { label: "과일", value: "fruit" },
  { label: "특이취향😵‍💫", value: "strange" },
];

function First({
  resultHandler,
  selectedHandler,
  startHandler,
  nthChoiceHandler,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <S.Container>
      <S.Title>어떤 맛을 좋아해?</S.Title>
      <S.OptionContainer>
        {options.map((option) => (
          <S.Option
            key={option.value}
            onClick={() => {
              resultHandler(option.value);
              setSelectedOption(option.value);
            }}
            style={{
              backgroundColor:
                selectedOption === option.value ? "#ffa07a" : "#ffefd5",
            }}
          >
            {option.label}
          </S.Option>
        ))}
      </S.OptionContainer>
      <S.ButtonField>
        <S.Button
          onClick={() => {
            selectedHandler("");
            startHandler(false);
          }}
        >
          이전으로
        </S.Button>
        <S.Button
          onClick={() => {
            nthChoiceHandler(2);
          }}
        >
          다음으로
        </S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default First;
