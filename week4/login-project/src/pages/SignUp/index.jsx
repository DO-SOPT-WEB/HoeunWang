import Button from "../../components/Common/Button";
import TextInput from "../../components/Common/TextInput";
import * as S from "./SignUp.style";

function SignUp() {
  return (
    <S.Container>
      <S.IDContainer>
        <TextInput label={"ID"} placeholder={"아이디를 입력해주세요"} />
        <Button>중복체크</Button>
      </S.IDContainer>
      <TextInput label={"비밀번호"} placeholder={"비밀번호를 입력해주세요"} />
      <TextInput
        label={"비밀번호 확인"}
        placeholder={"비밀번호를 입력해주세요"}
      />
      <TextInput label={"닉네임"} placeholder={"비밀번호를 입력해주세요"} />
      <Button customStyle={"background-color: gray"}>회원가입</Button>
    </S.Container>
  );
}

export default SignUp;
