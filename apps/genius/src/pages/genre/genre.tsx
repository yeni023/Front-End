import * as C from "../../pages/StoryFlow/container";
import { useNavigate } from "react-router-dom";
import {
  Container,
  GenreTitle,
  ImageWrapper,
  Image,
  OvalText,
  ImageTextWrapper,
  Wrapper,
  Arrow_Image,
  ArrowButton
} from "./genre";
import book from "../../assets/images/book.svg";
import castle from "../../assets/images/castle.svg";
import full_story from "../../assets/images/full_story.svg";
import ghost from "../../assets/images/ghost.svg";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Genre = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    console.log("다음 장");
    navigate("/StoryWay");
  };

  const previousPage = () => {
    console.log("이전 장");
  };

  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  return (
    <Container>
      <C.Header />
      <Wrapper>
        <GenreTitle>어떤 동화를 만들고 싶어?</GenreTitle>
        <ImageWrapper>
          <ArrowButton onClick={previousPage}>
            <Arrow_Image src={left} alt="left" />
          </ArrowButton>
          <ImageTextWrapper onClick={() => handleImageClick("castle")}>
            <Image src={castle} alt="castle" />
            <OvalText>판타지 동화 만들기</OvalText>
          </ImageTextWrapper>
          <ImageTextWrapper onClick={() => handleImageClick("book")}>
            <Image src={book} alt="book" />
            <OvalText>학습 동화 만들기</OvalText>
          </ImageTextWrapper>
          <ImageTextWrapper onClick={() => handleImageClick("ghost")}>
            <Image src={ghost} alt="ghost" />
            <OvalText>공포 동화 만들기</OvalText>
          </ImageTextWrapper>
          <ImageTextWrapper onClick={() => handleImageClick("full-story")}>
            <Image src={full_story} alt="full-story" />
            <OvalText>전래 동화 만들기</OvalText>
          </ImageTextWrapper>
          <ArrowButton onClick={nextPage}>
            <Arrow_Image src={right} alt="right" />
          </ArrowButton>
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default Genre;
