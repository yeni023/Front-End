// Tutorial.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TutorialStyle from './TutorialStyle';

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return '안녕, 우리는 너의 동화책 제작을 도울 알콩이, 달콩이라고 해. 우리의 이야기를 들어볼래?';
      case 3:
        return '우리는 숲 속에 살고 있어. 어떤 이야기를 만들어볼래?';
      case 4:
        return '너가 동화책을 만들면 우리 숲속에는 꽃과 나무가 자라날 수 있어';
      case 5:
        return '알콩이와 달콩이 둘 중 하나를 선택해서 같이 동화를 만들 수 있어!';
      case 6:
        return '튜토리얼 6';
      case 7:
        return '이제 너의 이야기를 만들 준비가 되었어! 함께 시작해볼까?';
      default:
        return '안녕하세요! 동화책 만들기 튜토리얼에 오신 것을 환영합니다.';
    }
  };

  return (
    <TutorialStyle.TutorialContainer>
      <TutorialStyle.BackgroundImage />
      <TutorialStyle.CharacterBubble>
        <TutorialStyle.CharacterImage />
        <TutorialStyle.StepContent>{getStepContent()}</TutorialStyle.StepContent>
        {currentStep < 7 && (
          <TutorialStyle.ButtonContainer>
            <TutorialStyle.NextButton onClick={nextStep}>다음으로</TutorialStyle.NextButton>
          </TutorialStyle.ButtonContainer>
        )}
      
      {currentStep === 7 && (
        <Link to="/selectchar">
          <TutorialStyle.ButtonContainer>
          <TutorialStyle.EndButton>튜토리얼 마침</TutorialStyle.EndButton>
          </TutorialStyle.ButtonContainer>
        </Link>
      )}
      </TutorialStyle.CharacterBubble>
    </TutorialStyle.TutorialContainer>
  );
};

export default Tutorial;
