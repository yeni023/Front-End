// Tutorial.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as TutorialStyle from './TutorialStyle';

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [tutorialComplete, setTutorialComplete] = useState<boolean>(false);

  useEffect(() => {
    const characterBubble = document.querySelector('.characterBubble');

    if (characterBubble) {
      characterBubble.classList.add('visible');
    }
  }, []);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);

    if (currentStep === 4) {
      hideStepAndButton();
    }
  };

  const hideStepAndButton = () => {
    const characterBubble = document.querySelector('.characterBubble');
    const nextButton = document.querySelector('.nextButton');
    const endButton = document.getElementById('endButton');

    if (characterBubble) {
      characterBubble.classList.remove('visible');
    }

    if (nextButton) {
      nextButton.classList.add('hidden');
    }

    if (endButton && currentStep === 4) {
      endButton.classList.remove('hidden');
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return '안녕, 우리는 너의 동화책 제작을 도울 알콩이, 달콩이라고 해. 우리의 이야기를 들어볼래?';
      case 3:
        return '우리는 숲 속에 살고 있어. 어떤 이야기를 만들어볼래?';
      case 4:
        return '이제 너의 이야기를 만들 준비가 되었어! 함께 시작해볼까?';
      default:
        return '안녕하세요! 동화책 만들기 튜토리얼에 오신 것을 환영합니다.';
    }
  };

  return (
    <TutorialStyle.TutorialContainer>
      <TutorialStyle.BackgroundImage />
      <TutorialStyle.CharacterBubble className={`characterBubble ${currentStep === 4 ? 'hidden' : ''}`}>
        <TutorialStyle.CharacterImage />
        <TutorialStyle.StepContent id="stepContent">
          {getStepContent()}
        </TutorialStyle.StepContent>
        {currentStep < 4 && (
          <TutorialStyle.NextButton className={`nextButton ${currentStep === 4 ? 'hidden' : ''}`} onClick={nextStep}>
            다음으로
          </TutorialStyle.NextButton>
        )}
      </TutorialStyle.CharacterBubble>
      <Link to="/selectchar">
        <TutorialStyle.EndButton
          id="endButton"
          className={`endButton ${!tutorialComplete ? 'hidden' : ''}`}
        >
          튜토리얼 마침
        </TutorialStyle.EndButton>
      </Link>
    </TutorialStyle.TutorialContainer>
  );
};

export default Tutorial;
