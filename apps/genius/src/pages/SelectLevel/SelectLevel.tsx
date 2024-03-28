import * as C from "../../pages/StoryFlow/container";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SelectLevelTitle,
  Wrapper,
  ImageWrapper,
  ImageTextWrapper,
  Arrow_Image,
  Image,
  ArrowButton,
  LevelButton
} from "./SelectLevel";
import easy from "../../assets/images/Level2.svg";
import medium from "../../assets/images/Level3.svg";
import hard from "../../assets/images/Level4.svg";

const SelectLevel = () => {
  // 다음 페이지 연결
  // const navigate = useNavigate();

  // const nextPage = () => {
  //   console.log("다음 장");
  //   navigate("/StoryWay");
  // };

  // const previousPage = () => {
  //   console.log("이전 장");
  // };
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  return (
    <Container>
      <C.Header />
      <Wrapper>
        <SelectLevelTitle>선택지 개수는 몇 개로 할까?</SelectLevelTitle>
        {/* <ImageWrapper> */}
          {/* <ArrowButton onClick={previousPage}>
            <Arrow_Image src={left} alt="left" />
          </ArrowButton> */}
          {/* <ArrowButton onClick={nextPage}>
            <Arrow_Image src={right} alt="right" />
          </ArrowButton> */}
        {/* </ImageWrapper> */}
        <ImageWrapper> {/* 이 부분을 활성화하여 버튼들을 가로로 배치 */}
          <LevelButton bgImage={easy} onClick={() => handleImageClick("easy")} />
          <LevelButton bgImage={medium} onClick={() => handleImageClick("medium")} />
          <LevelButton bgImage={hard} onClick={() => handleImageClick("hard")} />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default SelectLevel;
