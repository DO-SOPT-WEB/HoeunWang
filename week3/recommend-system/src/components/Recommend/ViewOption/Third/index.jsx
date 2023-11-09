/* eslint-disable react/prop-types */
import * as S from "./Third.style";

const options = [
  { label: "오리지날~", value: "old" },
  { label: "신상!!", value: "new" },
];

function Third({ resultHandler, nthChoiceHandler }) {
  return (
    <S.Container>
      <S.Title>오리지날과 신상 중 뭐를 원해?</S.Title>
      <S.OptionContainer>
        {options.map((option) => (
          <S.Option
            key={option.value}
            onClick={() => {
              resultHandler(option.value);
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
        <S.Button>결과보기</S.Button>
      </S.ButtonField>
    </S.Container>
  );
}

export default Third;
