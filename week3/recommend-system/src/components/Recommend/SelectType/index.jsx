/* eslint-disable react/prop-types */
import * as S from "./SelectType.style";

function SelectType({ selectedType, selectedHandler, startHandler }) {
  return (
    <S.Container>
      <S.Title>원하는 추천 방식을 골라줘!</S.Title>
      <S.ContentField>
        {(selectedType === "" || selectedType === "taste") && (
          <S.SelectType
            onClick={() => {
              selectedHandler("taste");
            }}
          >
            취향
          </S.SelectType>
        )}
        {(selectedType === "" || selectedType === "random") && (
          <S.SelectType
            onClick={() => {
              selectedHandler("random");
            }}
          >
            랜덤
          </S.SelectType>
        )}
      </S.ContentField>
      {selectedType !== "" && (
        <S.ButtonField>
          <S.StartButton
            onClick={() => {
              startHandler(true);
            }}
          >
            Start!
          </S.StartButton>
        </S.ButtonField>
      )}
    </S.Container>
  );
}
export default SelectType;
