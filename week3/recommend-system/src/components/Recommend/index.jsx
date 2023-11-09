import Random from "../Random";
import Taste from "../Taste";
import { Container, SubContainer, Title } from "./Recommend.style";

function Recommend() {
  return (
    <Container>
      <Title>원하는 추천 방식을 골라줘!</Title>
      <SubContainer>
        <Taste />
        <Random />
      </SubContainer>
    </Container>
  );
}
export default Recommend;
