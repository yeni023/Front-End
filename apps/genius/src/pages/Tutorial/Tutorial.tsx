import React, { useState } from 'react';
import './Tutorial.ts';

const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    // 다음 스텝으로 넘어가는 로직 추가
    setCurrentStep(currentStep + 1);
    
    // 예를 들어, 다음 스텝에 따라 다른 내용을 표시하도록 설정
    const stepContent = document.getElementById('stepContent');
    if (currentStep === 2) {
      if (stepContent) {
        stepContent.innerHTML = '다음 스텝입니다. 어떤 내용이 나오면 좋을까요?';
      }
    } else if (currentStep === 3) {
      if (stepContent) {
        stepContent.innerHTML = '또 다른 스텝입니다. 계속 진행해보세요!';
      }
    } else if (currentStep === 4) {
      if (stepContent) {
        stepContent.innerHTML = '계속 진행해보세요!';
      }
    } else if (currentStep === 5) {
      if (stepContent) {
        stepContent.innerHTML = '';
      }
      hideStepAndButton();
      showEndButton();
    }
  };

  const hideStepAndButton = () => {
    const characterBubble = document.querySelector('.characterBubble');
    const nextButton = document.querySelector('.nextButton');
    if (characterBubble) {
      characterBubble.classList.add('hidden');
    }
    if (nextButton) {
      nextButton.classList.add('hidden');
    }
  };

  const showEndButton = () => {
    const endButton = document.getElementById('endButton');
    if (endButton) {
      endButton.classList.remove('hidden');
    }
  };

  const endTutorial = () => {
    // 동화책 만들기 튜토리얼을 마치는 로직 추가
    alert('튜토리얼을 마칩니다.');
  };

  return (
    <div id="tutorialContainer">
      <div className="tutorialStep" id="step1">
        <div className="characterBubble">
          <div id="stepContent">안녕하세요! <br />동화책 만들기 튜토리얼에 오신 것을 환영합니다.</div>
        </div>
      </div>

      <div className="buttonContainer" id="buttonContainer">
        <button className="nextButton" onClick={nextStep}>
          다음으로
        </button>
        <button id="endButton" onClick={endTutorial} className="hidden">
          달콩이 이야기 마침
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
