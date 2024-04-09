// TutorialStyle.ts
import styled from 'styled-components';

export const TutorialContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const BackgroundImage = styled.div`
  background: url('src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const CharacterBubble = styled.div`
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
`;

export const CharacterImage = styled.div`
  background: url('src/assets/images/character.png') no-repeat center center;
  background-size: contain;
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  align-items: center;
`;

export const StepContent = styled.div`
  font-size: 1.2em;
  white-space: pre-line;
  background-color: #fff;
  padding: 50px 70px;
  border-radius: 80px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -90%);
  width: 100%;
  border: 1.5px solid lightseagreen;
  text-align: center;
  
`;

export const ButtonContainer = styled.div` /* 새로운 컨테이너 스타일 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NextButton = styled.button`
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

export const EndButton = styled.button`
  background-color: #fff;
  color: #D057A9;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: 3px solid lightpink;

  &:hover {
    background-color: #FFD3E0;
  }
`;