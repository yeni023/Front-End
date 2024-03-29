import * as C from "../../pages/StoryFlow/container";
// import { useNavigate } from "react-router-dom";
import {
  Container,
  SelectLevelTitle,
  Wrapper,
  ImageWrapper,
  LevelButton
} from "./SelectLevel";
import easy from "../../assets/images/Level2.svg";
import medium from "../../assets/images/Level3.svg";
import hard from "../../assets/images/Level4.svg";

const SelectLevel = () => {
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  return (
    <Container>
      <C.Header />
      <Wrapper>
        <SelectLevelTitle>선택지 개수는 몇 개로 할까?</SelectLevelTitle>
        <ImageWrapper>
          <LevelButton
            bgImage={easy}
            onClick={() => handleImageClick("easy")}
          />
          <LevelButton
            bgImage={medium}
            onClick={() => handleImageClick("medium")}
          />
          <LevelButton
            bgImage={hard}
            onClick={() => handleImageClick("hard")}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectLevel;
