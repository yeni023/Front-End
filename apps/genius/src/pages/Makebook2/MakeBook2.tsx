import * as C from "../StoryFlow/container";
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
  ButtonWrapper
} from "./MakeBook2";

const MakeBook2 = () => {
  const currentPage = "MakeBook2";
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  const handleCustomButtonClick = () => {
    console.log("Custom button clicked");
  };

  const handleCustomButton2Click = () => {
    console.log("Custom button 2 clicked");
  };
  return (
    <Container>
      <C.Header2 currentPage={currentPage} />
      <BookImageContainer>
        <BookImage onClick={() => handleImageClick("BookImage")} />
      </BookImageContainer>
      <TextBoxContainer>
        <TextBox>
          김미미는 갈색 머리에 까만 눈을 가지고 있어요. 미미는 매우 용감한 성격을 가진 소녀예요.
        </TextBox>
      </TextBoxContainer>
      <ImageTextBox>
        <ImageButton></ImageButton>
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

export default MakeBook2;
