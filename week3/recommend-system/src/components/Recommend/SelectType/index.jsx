/* eslint-disable react/prop-types */
import * as S from "./SelectType.style";

function SelectType({ selectedType, selectedHandler, startHandler }) {
  return (
    <S.Container>
      <S.ContentSection>
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
      </S.ContentSection>
      {selectedType !== "" && (
        <S.ButtonSection>
          <S.StartButton
            onClick={() => {
              startHandler(true);
            }}
          >
            Start!
          </S.StartButton>
        </S.ButtonSection>
      )}
    </S.Container>
  );
}
export default SelectType;
