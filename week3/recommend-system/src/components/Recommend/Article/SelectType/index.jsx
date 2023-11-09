import PropTypes from "prop-types";

SelectType.propTypes = {
  selectedType: PropTypes.string.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  startHandler: PropTypes.func.isRequired,
};

function SelectType({ selectedType, selectedHandler, startHandler }) {
  return (
    <>
      {selectedType === "" || selectedType === "taste" ? (
        <div
          onClick={() => {
            selectedHandler("taste");
          }}
        >
          취향
        </div>
      ) : (
        <div
          onClick={() => {
            selectedHandler("random");
          }}
        >
          랜덤
        </div>
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
