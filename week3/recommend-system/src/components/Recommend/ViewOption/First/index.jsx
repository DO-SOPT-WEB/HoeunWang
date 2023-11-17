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
  const selectedCss = "#ffa07a";
  const unSelectedCss = "#ffefd5";
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
                selectedOption === option.value ? selectedCss : unSelectedCss,
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
          disabled={!selectedOption}
        >
          다음으로
        </S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default First;
