import { useState } from "react";
import * as S from "./Second.style";

const options = [
  { label: "씹히는거", value: "chrunk" },
  { label: "깔끔한거", value: "only" },
  { label: "다른 맛도", value: "other" },
];

function Second({ resultHandler, nthChoiceHandler }) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <S.Container>
      <S.Title>조금 더 자세히 알려줘!</S.Title>
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
            nthChoiceHandler(1);
          }}
        >
          이전으로
        </S.Button>
        <S.Button
          onClick={() => {
            nthChoiceHandler(3);
          }}
          disabled={!selectedOption}
        >
          다음으로
        </S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default Second;
