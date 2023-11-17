import { useRecoilState } from "recoil";
import authApi from "../../api/auth.api";
import Button from "../../components/Common/Button";
import TextInput from "../../components/Common/TextInput";
import * as S from "./SignUp.style";
import { ROUTE } from "../../constants/route.constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [checkDuplicated, setCheckDuplicated] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onChangeUserName = (e) => {
    const newUserName = e.target.value;
    setUserName(newUserName);
  };
  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const onChangeNickName = (e) => {
    const newNickName = e.target.value;
    setNickName(newNickName);
  };

  const onClickCheckDuplicateID = async () => {
    setClicked(true);
    try {
      const response = await authApi.checkDuplicateID({ username });

      if (response.isExist) {
        setCheckDuplicated(true);
        console.log("중복X");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const canActiveButton = Boolean(
    !username || !password || !nickname || !checkDuplicated
  );

  const onClickSignUp = async () => {
    try {
      const response = await authApi.signUp({
        submitData: {
          username,
          password,
          nickname,
        },
      });
      if (response) {
        navigate(ROUTE.LOGIN);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.Container>
      <S.Title>SignUp</S.Title>
      <S.IDContainer>
        <TextInput
          onChange={onChangeUserName}
          label={"ID"}
          placeholder={"아이디를 입력해주세요"}
        />
        <Button
          onClick={onClickCheckDuplicateID}
          customStyle={
            checkDuplicated && clicked
              ? "background-color:red"
              : "background-color:green"
          }
        >
          중복체크
        </Button>
      </S.IDContainer>
      <TextInput
        onChange={onChangePassword}
        label={"비밀번호"}
        placeholder={"비밀번호를 입력해주세요"}
      />
      <TextInput
        label={"비밀번호 확인"}
        placeholder={"비밀번호를 다시 한 번 입력해주세요"}
      />
      <TextInput
        onChange={onChangeNickName}
        label={"닉네임"}
        placeholder={"닉네임을 입력해주세요"}
      />
      <Button
        onClick={onClickSignUp}
        customStyle={"background-color: gray"}
        disabled={canActiveButton}
      >
        회원가입
      </Button>
    </S.Container>
  );
}

export default SignUp;
