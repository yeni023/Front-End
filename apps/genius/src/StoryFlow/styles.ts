import styled from "styled-components";
import BackgroundImage from "../assets/StoryFlow/Background.png";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  z-index: 100;
  align-items: center;
`;

export const HeaderElement = styled.div`
  display: block;
  width: 150px;
  /* padding-left: 20px; */
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 130px;
  align-items: center;
  background-color: black;

  // background-image: url(${BackgroundImage});
  // background-size: cover;
  overflow: hidden;
  // height: 100vh;
`;

export const Content1 = styled.div`
  position: fixed;
  top: 130px;
  overflow: hidden;
  width: 35%;
  height: 100%;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const Content2 = styled.div`
  position: sticky;
  top: 130px;
  left: 35%;
  width: 65%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const Content1Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const Content1TitleInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  gap: 30px;
`;

export const Content1InputTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px;
  text-align: center;
`;

export const Content1InputSubject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px;
  text-align: center;
`;

export const Content1Subject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const Content1SubjectInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: center;
  gap: 30px;
`;

export const Content2Element = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Content2ElementInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  justify-content: center;
  gap: 30px;
  background-color: white;
  border-radius: 50px;
`;
