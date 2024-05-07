import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('./src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  /* 크롬, 사파리, 오페라, 엣지 브라우저용 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;


export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 120px;
  padding: 200px 0;
  animation: ${fadeIn} 1s ease forwards;

  & > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }

  & > *:nth-child(1) {
    animation-delay: 0.5s; /* 타이틀이 먼저 나타나도록 설정 */
  }

  & > *:nth-child(2) {
    animation-delay: 1s; /* 디스크립션이 타이틀 다음에 나타나도록 설정 */
  }

  & > *:nth-child(3) {
    animation-delay: 2s; /* 버튼이 가장 마지막에 나타나도록 설정 */
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #688179;
  animation: ${fadeIn} 1s ease forwards;
`;

export const MainDescription = styled.p`
  font-size: 1.3em;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #fff;
  white-space: pre-line;
  animation: ${fadeIn} 1s ease forwards;
`;


export const AnimationContainer = styled.div`
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CreateStoryButton = styled.button`
  background-color: #fff;
  color: #8DD1BD;
  padding: 18px 28px;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  animation: ${fadeIn} 3.5s ease forwards; /* 버튼이 가장 마지막에 나타나도록 설정 */

  &:hover {
    background-color: #45a049;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }
`;

export const SecondSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 30vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-left: -150px;
    margin-right: 80px;
  }

  p {
    width: 100%;
    font-size: 1.6em;
    font-weight: 500;
    color: #000;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ThirdSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 40vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-right: -150px;
    margin-left: 70px;
  }

  p {
    font-size: 1.6em;
    font-weight: 500;
    color: #000;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
  }
`;

export const FourthSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 40vh;
  margin-bottom: 200px;
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;

  &.visible {
    opacity: 1;
  }

  img {
    max-width: 50%;
    margin-left: -80px;
    margin-right: 60px;
  }

  p {
    font-size: 1.6em;
    font-weight: 500;
    color: #000;
    text-align: center;
    line-height: 1.9;
    padding: 25px 200px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
  }
`;
