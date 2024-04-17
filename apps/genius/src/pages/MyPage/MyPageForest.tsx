import React, { useState } from "react";
import {
  PageContainer,
  TopBar,
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
  ForestButtonContainer,
  ForestButton
} from "./MyPageForest";

import bgImage from "../../assets/images/MyPageBG.svg";
import profileImage from "../../assets/images/MyProfile.svg";
import followingImage from "../../assets/images/Following.svg";
import followerImage from "../../assets/images/Follower.svg";
import AnswerImage from "../../assets/images/Answer.svg";
import ForestTextImage from "../../assets/images/ForestTitle.svg";

const MyPageForest: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleQuestionClick = () => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 3000);
  };
  return (
    <PageContainer>
      <TopBar></TopBar>
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
      <ColorSection>
        <ForestButtonContainer>
          <ForestButton></ForestButton>
        </ForestButtonContainer>
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
            src={ForestTextImage}
            alt="Forest Text"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              height: "auto",
              position: "relative",
              left: "40px",
              top: "-60px"
            }}
          />
        </div>
      </ColorSection>
    </PageContainer>
  );
};

export default MyPageForest;
