import * as C from "../StoryFlow/container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BookImage,
  BookImageContainer,
  TextBox,
  TextBoxContainer,
  ImageButton,
  ImageTextBox,
  TextImageContainer,
  TextImage,
  CustomButton,
  CustomButton2,
  ButtonWrapper,
  FullscreenImage,
  MakeBookImage,
  OverlayButtonWrapper,
  OverlayButton1,
  OverlayButton2
} from "./MakeBook";

const MakeBook = () => {
  const currentPage = "MakeBook";
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };

  const handleImageButtonClick = () => {
    setShowFullscreenImage(true);
  };

  const handleCustomButtonClick = () => {
    console.log("Custom button clicked");
  };

  const handleCustomButton2Click = () => {
    console.log("Custom button 2 clicked");
  };

  const handleOverlayButton1Click = () => {
    setShowFullscreenImage(false);
  };

  const handleOverlayButton2Click = () => {
    navigate('/LastPage');
  };

  useEffect(() => {
    if (showFullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFullscreenImage]);

  return (
    <Container>
      <C.Header currentPage={currentPage} />
      {showFullscreenImage && (
        <>
          <FullscreenImage />
          <MakeBookImage />
          <OverlayButtonWrapper>
            <OverlayButton1 onClick={handleOverlayButton1Click} />
            <OverlayButton2 onClick={handleOverlayButton2Click} />
          </OverlayButtonWrapper>
        </>
      )}
      <BookImageContainer>
        <BookImage onClick={() => handleImageClick("BookImage")} />
      </BookImageContainer>
      <TextBoxContainer>
        <TextBox>
          김미미는 갈색 머리에 까만 눈을 가지고 있어요. 미미는 매우 용감한 성격을 가진 소녀예요.
        </TextBox>
      </TextBoxContainer>
      <ImageTextBox>
        <ImageButton onClick={handleImageButtonClick}></ImageButton>
      </ImageTextBox>
      <TextImageContainer>
        <TextImage onClick={() => handleImageClick("TextImage")} />
      </TextImageContainer>
      <ButtonWrapper>
        <CustomButton onClick={handleCustomButtonClick}></CustomButton>
        <CustomButton2 onClick={handleCustomButton2Click}></CustomButton2>
      </ButtonWrapper>
    </Container>
  );
};

export default MakeBook;
