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
  TextImage
} from "./MakeBook";

const MakeBook = () => {
  const currentPage = "MakeBook";
  const handleImageClick = (type: string) => {
    console.log(` ${type}`);
  };
  return (
    <Container>
      <C.Header currentPage={currentPage} />
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
    </Container>
  );
};

export default MakeBook;
