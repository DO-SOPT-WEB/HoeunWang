import PropTypes from "prop-types";
import * as S from "./SelectType.style";

SelectType.propTypes = {
  selectedType: PropTypes.string.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  startHandler: PropTypes.func.isRequired,
};

function SelectType({ selectedType, selectedHandler, startHandler }) {
  return (
    <>
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
      {selectedType !== "" && (
        <button
          onClick={() => {
            startHandler(true);
          }}
        >
          Start!
        </button>
      )}
    </>
  );
}
export default SelectType;
