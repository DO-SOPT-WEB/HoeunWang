/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./Third.style";

const options = [
  { label: "오리지날~", value: "old" },
  { label: "신상!!", value: "new" },
];

function Third({ resultHandler, nthChoiceHandler }) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <S.Container>
      <S.Title>오리지날 VS 신상</S.Title>
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
            nthChoiceHandler(2);
          }}
        >
          이전으로
        </S.Button>
        <S.Button
          onClick={() => {
            nthChoiceHandler(4);
          }}
          disabled={!selectedOption}
        >
          결과보기
        </S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default Third;
