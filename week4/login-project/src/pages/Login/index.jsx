import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import TextInput from "../../components/Common/TextInput";
import * as S from "./Login.style";
import { ROUTE } from "../../constants/route.constant";
import { getUserInfo } from "../../service/auth";

function Login() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate(ROUTE.MYPAGE);
  };
  const handleClickSignUp = () => {
    navigate(ROUTE.SIGN_UP);
  };
  return (
    <S.Container>
      <TextInput label={"ID"} placeholder={"아이디를 입력해주세요"} />
      <TextInput label={"PASSWORD"} placeholder={"비밀번호를 입력해주세요"} />
      <S.ButtonContainer>
        <Button onClick={handleClickLogin}>로그인</Button>
        <Button
          onClick={handleClickSignUp}
          customStyle={"background-color: white;color:black"}
        >
          회원가입
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Login;
