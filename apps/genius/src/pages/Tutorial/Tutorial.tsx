// Tutorial.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Navbar from '../Navbar/Navbar';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TutorialContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.div`
  background: url('src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const CharacterBubble = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.9s ease-in-out;
`;

const CharacterImage = styled.div`
  background: url('src/assets/images/character.png') no-repeat center center;
  background-size: contain;
  width: 500px;
  height: 370px;
  margin-top: 160px;
  margin-bottom: 10px;
  align-items: center;
`;

const StepContent = styled.div`
  font-size: 1.2em;
  white-space: pre-line;
  background-color: #fff;
  padding: 100px 60px;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 30%;
  font-size: 23px;
  transform: translate(-50%, -90%);
  width: 100%;
  border: 1.5px solid lightseagreen;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out; /* fadeIn 애니메이션 적용 */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: 3px solid lightblue;

  &:hover {
    background-color: #4da351;
    color: #fff;
  }
`;

const EndButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: 3px solid lightblue;

  &:hover {
    background-color: #4da351;
    color: #fff;
  }
`;

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
    <TutorialContainer>
      <Navbar />
      <BackgroundImage />
      <CharacterBubble>
        <CharacterImage />
        <StepContent key={currentStep}>{getStepContent()}</StepContent> {/* 키 추가 */}
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
