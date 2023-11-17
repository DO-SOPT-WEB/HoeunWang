/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import Button from "../../components/Common/Button";
import TextInput from "../../components/Common/TextInput";
import * as S from "./Login.style";
import { ROUTE } from "../../constants/route.constant";
import authApi from "../../api/auth.api";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import userInfo from "../../recoil/auth.atoms";

function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const setRecoil = useSetRecoilState(userInfo);

  const onChangeUserName = (e) => {
    const newUserName = e.target.value;
    setUserName(newUserName);
  };
  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const canActiveButton = Boolean(!username || !password);

  const onClickLogin = async () => {
    try {
      const response = await authApi.login({
        submitData: {
          username,
          password,
        },
      });
      if (response) {
        setRecoil((prevUserInfo) => ({
          ...prevUserInfo,
          id: response.id,
          userId: response.username,
          nickname: response.nickname,
        }));
        navigate(ROUTE.MYPAGE);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSignUp = () => {
    navigate(ROUTE.SIGN_UP);
  };
  return (
    <S.Container>
      <TextInput
        label={"ID"}
        placeholder={"아이디를 입력해주세요"}
        onChange={onChangeUserName}
        value={username}
      />
      <TextInput
        label={"PASSWORD"}
        placeholder={"비밀번호를 입력해주세요"}
        onChange={onChangePassword}
        value={password}
      />
      <S.ButtonContainer>
        <Button onClick={onClickLogin} disabled={canActiveButton}>
          로그인
        </Button>
        <Button
          onClick={onClickSignUp}
          customStyle={"background-color: white;color:black"}
        >
          회원가입
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Login;
