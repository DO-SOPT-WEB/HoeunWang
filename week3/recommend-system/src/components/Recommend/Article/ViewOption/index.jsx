import PropTypes from "prop-types";

ViewOption.propTypes = {
  selectedHandler: PropTypes.func.isRequired,
  startHandler: PropTypes.func.isRequired,
};
function ViewOption() {
  return (
    <>
      <p>옵션들 보여주기</p>
    </>
  );
}
export default ViewOption;
