import styled from 'styled-components';


export const BodyStyle = styled.div`
  margin: 0;
  font-family: 'Arial', sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
`;

export const Navbar = styled.div`
  background-color: #fff;
  color: #9D9D9D;
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
  gap: 40px;
`;

export const MainMenuItem = styled.a`
  margin: 0 30px;
  color: #9D9D9D;
  font-weight: medium;
  position: relative;

  &:hover + .sub-menu {
    display: flex;
    flex-direction: column;
  }
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ccc;
  border: 1px solid #999;
  padding: 10px;

  ${MainMenuItem}:hover + & {
    display: flex;
  }
`;

export const SubMenuItem = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 5px 0;
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
  padding: 18px 25px;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #45a049;
  }
`;
