import TextInput from "./components/Common/TextInput";

function App() {
  return (
    <>
      <div>로그인</div>
      <TextInput
        placeholder={"아이디를 입력해주세요"}
        errorMessage={"중복된 아이디입니다."}
        isError
      />
    </>
  );
}

export default App;
