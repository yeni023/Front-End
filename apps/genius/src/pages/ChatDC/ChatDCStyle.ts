import styled from "styled-components";

import dalcong_bg from "../../assets/images/DalkongBG.png";

export const InputContainer = styled.div`
  width: 920px;
  height: 91px;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px; /* Adjust as needed */
`;

export const Input = styled.input`
  padding: 30px;
  color: #8e8e8e;
  width: 860px;

  background: #ffffff;
  border: 1px solid #ffffff;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  border-radius: 50px 0px 0px 50px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  width: 60px;
  padding: 8px;
  border-radius: 0px 50px 50px 0px;
  background-color: #007bff;
  color: #fff;
`;

export const DCBackgroundContainer = styled.div`
  background-image: url(${dalcong_bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MessagesList = styled.div`
  width: 1500px;
  max-height: 700px;
  overflow-y: auto; /* Changed overflow-y to auto */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); /* For Firefox */
  &::-webkit-scrollbar {
    width: 8px; /* Width of vertical scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* Color of thumb */
    border-radius: 4px; /* Roundness of thumb */
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1); /* Color of track */
  }
`;

interface MessageContainerProps {
  isUser: boolean;
  alignRight?: boolean; // Added alignRight prop
}

export const MessageContainer = styled.div<MessageContainerProps>`
  padding: 10px;
  margin-bottom: 30px;
  width: fit-content;
  max-width: 60%;
  background-color: ${({ isUser }) => (isUser ? "#B5E4F8" : "#F8A31B")};
  border-radius: ${({ isUser }) =>
    isUser ? "50px 50px 5px 50px" : "50px 50px 50px 5px"};
  margin-left: ${({ isUser }) => (isUser ? "auto" : "0.4rem")};

  color: black;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  word-break: break-all;
  display: flex;
  justify-content: center;
`;
