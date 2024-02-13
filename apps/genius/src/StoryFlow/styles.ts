import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

export const Header = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 130px;
  gap: 0px;
  align-items: center;
`;

export const HeaderElement = styled.div`
  display: block;
  width: 150px;
  // height: 100px;
  // align-items: center;
  padding-left: 20px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
