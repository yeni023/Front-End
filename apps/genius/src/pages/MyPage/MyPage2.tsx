import React, { useState } from "react";
import {
  PageContainer,
  TopBar,
  Logo,
  NavButton,
  ButtonGroup,
  ImageSection,
  ColorSection,
  ProfileButton,
  NameButton,
  IDButton,
  SocialButton,
  SocialButtonsContainer,
  SocialImage,
  SeedNumButtonContainer,
  SeedNumButton,
  QuestionButton,
  AnswerImg,
  SampleButton,
  ButtonRow,
  HoverButton
} from "./MyPage2";
import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/MyProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import AnswerImage from "../../assets/images/Answer.svg";
import BookTextImage from "../../assets/images/BookTitle.svg";
import AddButtonImg1 from "../../assets/images/BookChoose1.svg";
import AddButtonImg2 from "../../assets/images/BookChoose2.svg";

const MyPage2: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleQuestionClick = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 3000);
  };

  return (
    <PageContainer>
      <TopBar>
        <Logo src="path_to_logo.png" alt="Logo" />
        <ButtonGroup>
          <NavButton>Find a Fairy Tale</NavButton>
          <NavButton>Customer Support</NavButton>
          <NavButton>My Page</NavButton>
        </ButtonGroup>
      </TopBar>
      <ImageSection bgImage={bgImage}>
        <ProfileButton
          image={profileImage}
          onClick={() => console.log("Profile button clicked!")}
        />
        <NameButton onClick={() => console.log("Name button clicked!")}>
          박예은
        </NameButton>
        <IDButton onClick={() => console.log("ID button clicked!")}>
          _.zer023
        </IDButton>
        <SocialButtonsContainer>
          <SocialButton
            onClick={() => console.log("Following button clicked!")}
          >
            <SocialImage src={followingImage} alt="Following" />
          </SocialButton>
          <SocialButton onClick={() => console.log("Follower button clicked!")}>
            <SocialImage src={followerImage} alt="Follower" />
          </SocialButton>
        </SocialButtonsContainer>
        <SeedNumButtonContainer>
          <SeedNumButton
            onClick={() => console.log("SeedNum button clicked!")}
          />
          <QuestionButton onClick={handleQuestionClick} />
          {showAnswer && <AnswerImg src={AnswerImage} alt="Answer" />}
        </SeedNumButtonContainer>
      </ImageSection>
      <ButtonRow>
        {[1, 2, 3].map((index) => (
          <SampleButton
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index && (
              <>
                <HoverButton
                  bgImage={AddButtonImg1}
                  style={{ opacity: 1, transform: "translate(-70%, -120%)" }}
                  onClick={() =>
                    console.log(`Hover Button 1 clicked from group ${index}`)
                  }
                />
                <HoverButton
                  bgImage={AddButtonImg2}
                  style={{ opacity: 1, transform: "translate(70%, -120%)" }}
                  onClick={() =>
                    console.log(`Hover Button 2 clicked from group ${index}`)
                  }
                />
              </>
            )}
          </SampleButton>
        ))}
      </ButtonRow>
      <ColorSection>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
            padding: "20px"
          }}
        >
          <img
            src={BookTextImage}
            alt="Book Text"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              height: "auto",
              margin: "-50px 0 0 -20px"
            }}
          />
        </div>
      </ColorSection>
    </PageContainer>
  );
};

export default MyPage2;
