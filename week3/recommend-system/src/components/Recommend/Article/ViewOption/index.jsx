/* eslint-disable react/prop-types */

function ViewOption({ selectedHandler, startHandler }) {
  const check = () => {
    console.log(selectedHandler, startHandler);
  };
  return (
    <>
      <div onClick={check()}>선택지</div>
    </>
  );
}
export default ViewOption;
