import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// 서브메뉴 슬라이드 애니메이션
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('./src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
  overflow-x: hidden;
  
`;

export const Navbar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: large;
`;

export const MainMenu = styled.div`
  display: flex;
  margin-left: 8px;
  top: 4px;
  align-items: center;
  padding: 19px 18px;
  white-space: nowrap;
  gap: 145px;
  position: relative; /* 메인 메뉴에 상대적으로 위치 지정 */
`;

export const MenuItem = styled.div`
  position: relative;
  text-decoration: none;
  color: #9d9d9d;
  display: block;
  font-size: 23px;
  padding: 25px;
  cursor: pointer;

  &:hover {
    color: #42655B;
  }
`;

export const LogoImage = styled.img`
  width: 160px;
  height: 145px;
  margin-left: -30px;
  margin-right: -100px;
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 81px;
  left: -6px;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  animation: ${slideDown} 0.4s ease forwards;
  opacity: 0;
  display: none; /* 초기에는 서브메뉴를 보이지 않도록 설정 */

  ${MenuItem}:hover & {
    display: block; /* 메인 메뉴를 호버했을 때만 서브메뉴를 보이도록 설정 */
    opacity: 1;
  }
`;

export const SubMenuItem = styled(Link)`
  display: block;
  padding: 20px 15px;
  color: #000;
  text-align: center;
  text-decoration: none;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  &:focus {
    outline: 0;
  }
`;

export const LoginSignupButton = styled.button`
  color: #9D9D9D;
  background-color: #fff;
  border-color: #9D9D9D;
  border-width: 1px;
  padding: 8px 16px;
  margin-left: 5px;
  margin-right: 30px;

  &:hover {
    background-color: #fff;
    color: #000;
    border-color: #000;
  }

  &:focus {
    outline: 0;
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
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
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
    font-size: 1.6em;
    font-weight: 500;
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 80px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin: 0;
    background-color: hsla(207, 44%, 49%, 0.5);
    max-width: 50%;
  }
`;

export const ThirdSection = styled.div`
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  margin-top: 40vh;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
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
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 80px;
    margin: 0;
    border-radius: 50px;
    border: 2px solid #fff;
    background-color: hsla(207, 44%, 49%, 0.5);
    max-width: 50%;
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
    color: #fff;
    text-align: center;
    line-height: 1.9;
    padding: 25px 80px;
    border-radius: 50px;
    border: 2px solid #fff;
    margin: 0;
    background-color: hsla(207, 44%, 49%, 0.5);
    max-width: 50%;
  }
`;