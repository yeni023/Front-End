// TutorialStyle.ts
import styled from 'styled-components';

export const TutorialContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  background: url('src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const CharacterBubble = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out; // opacity 변경에 대한 transition 설정

  &.visible {
    opacity: 1; // visible 클래스가 추가되면 opacity가 1로 변경되어 나타남
  }
`;

export const CharacterImage = styled.div`
  background: url('src/assets/images/character.png') no-repeat center center;
  background-size: contain;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  align-items: center;
`;

export const StepContent = styled.div`
  font-size: 1.2em;
  white-space: pre-line;
`;

export const ButtonContainer = styled.div` /* 새로운 컨테이너 스타일 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 15px 20px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const EndButton = styled.button`
  background-color: #fff;
  color: #D057A9;
  padding: 15px 20px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #FFD3E0;
  }
`;
