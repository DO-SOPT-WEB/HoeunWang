import Button from "../../components/Common/Button";
import TextInput from "../../components/Common/TextInput";
import * as S from "./Login.style";

function Login() {
  return (
    <S.Container>
      <TextInput label={"ID"} placeholder={"아이디를 입력해주세요"} />
      <TextInput label={"PASSWORD"} placeholder={"비밀번호를 입력해주세요"} />
      <Button>로그인</Button>
      <Button customStyle={"background-color: white;color:black"}>
        회원가입
      </Button>
    </S.Container>
  );
}

export default Login;
