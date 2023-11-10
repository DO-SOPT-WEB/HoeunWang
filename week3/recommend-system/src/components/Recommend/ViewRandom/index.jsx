import { IceCreamOption } from "../../../constants/IceCreamOption";
import * as S from "./ViewRandom.style";

function ViewRandom() {
  const getRandomIceCream = () => {
    const categories = Object.keys(IceCreamOption);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const flavors = Object.keys(IceCreamOption[randomCategory]);
    const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

    return IceCreamOption[randomCategory][randomFlavor].new;
  };
  const randomIceCream = getRandomIceCream();
  return (
    <S.Container>
      <S.Title>랜덤 결과</S.Title>
      <S.ContentContainer>{randomIceCream}</S.ContentContainer>
    </S.Container>
  );
}
export default ViewRandom;
