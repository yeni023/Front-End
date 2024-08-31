import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TutorialContainer,
  BackgroundImage,
  CharacterBubble,
  CharacterImage,
  StepContent,
  ButtonContainer,
  NextButton,
  EndButton
} from './TutorialStyle';
import Navbar from '../Navbar/Navbar';

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return (
          <>
            함께 동화책을 만들며 숲속을 더욱 아름답게 <br />만들어나가기 위해 여러분에게 <br />안내할 사항이 있어요.
          </>
        );
      case 3:
        return (
          <>
            동화책을 만들면 숲속에 많은 나무와 꽃들이 <br />자라나요! 이 숲속을 더욱 아름답게 만들기 위해 <br />
            알콩이, 달콩이가 도와줄거예요.
          </>
        );
      case 4:
        return (
          <>
            동화책 제작 방법에 대한 자세한 내용은 <br />선택한 캐릭터가 안내할 거예요. 
            <br />우리가 당신의 이야기를 가득 채워줄게요!       
          </>
        );
      case 5:
        return (
          <>
            이제 시작해볼까요? 알콩이와 달콩이가 당신의 이야기를 만들어내기 위해 기다리고 있답니다!
          </>
        );
      case 6:
        return (
          <>
            동화책을 완성하고 완성된 이야기를 즐겨봐요. <br />함께한 여정이 기억에 오래 남을 거예요.
          </>
        );
      case 7:
        return (
          <>
            숲속의 아름다움을 <br />함께 만들어 갈 준비가 되셨나요? <br />이제 동화책을 만들러 가보죠!
          </>
        );
      default:
        return (
          <>
            안녕하세요! <br />우리는 이 숲속을 지키는 가이드<br />알콩이, 달콩이에요.
          </>
        );
    }
  };

  // Step에 따른 이미지를 설정하는 함수
  const getCharacterImage = () => {
    switch (currentStep) {
      case 2:
        return 'src/assets/images/char5.png';
      case 3:
        return 'src/assets/images/char4.png';
      case 4:
        return 'src/assets/images/char3.png';
      case 7:
        return 'src/assets/images/char3.png';
      default:
        return 'src/assets/images/character.png';
    }
  };

  return (
    <TutorialContainer>
      <Navbar />
      <BackgroundImage />
      <CharacterBubble>
        <CharacterImage image={getCharacterImage()} />
        <StepContent key={currentStep}>{getStepContent()}</StepContent>
        {currentStep < 7 && (
          <ButtonContainer>
            <NextButton onClick={nextStep}>다음으로</NextButton>
          </ButtonContainer>
        )}
        {currentStep === 7 && (
          <Link to="/selectchar">
            <ButtonContainer>
              <EndButton>튜토리얼 마침</EndButton>
            </ButtonContainer>
          </Link>
        )}
      </CharacterBubble>
    </TutorialContainer>
  );
};

export default Tutorial;
