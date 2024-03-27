// MainHomeStyle.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BodyStyle = styled.div`
  margin: 0;
  font-family: 'Arial', sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('./src/assets/images/forest.jpg') no-repeat center center fixed;
  background-size: cover;
  box-sizing: border-box;
`;

export const Navbar = styled.div`
  background-color: #fff;
  padding: 13px;
  width: 100%;
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
  gap: 150px;
  margin-left: 20px;
  position: relative;
`;

export const SubMenu = styled.div`
  position: absolute;
  display: inline-block;
  width: 100%;
  position: absolute;
  top: 57px;
  padding: 5px 8px;
  left: -8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  white-space: nowrap;
  display: none;

`;

export const MenuItem = styled.div`
  position: relative;
  text-decoration: none;
  color: #333;
  padding: 10px 20px;

  &:hover ${SubMenu} {
    display: flex;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
  }

  /* 클릭해도 서브메뉴가 유지되도록 설정 */
  &:active ${SubMenu} {
    opacity: 1;
    visibility: visible;
  }
`;

export const MainMenuItem = styled(Link)`
  margin: 0 30px;
  font-weight: medium;
  position: relative;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #fff;
  }

  &:hover + ${SubMenu} {
    display: flex;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
  }
`;

export const SubMenuItem = styled.div`
  padding: 15px;
  color: #000;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
    font-weight: bold;
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
    border-color: #9D9D9D;
  }
`;

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #688179;
`;

export const MainDescription = styled.p`
  font-size: 1.3em;
  margin-bottom: 30px;
  color: #fff;
  white-space: pre-line;
`;

export const AnimationContainer = styled.div`
  opacity: 1;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

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

  &:hover {
    background-color: #45a049;
    color: #fff;
  }
`;