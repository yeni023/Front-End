import styled from "styled-components";
import DalkongBG from "../../assets/images/DalkongBG.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";

interface MessageProps {
  isUser: boolean;
}

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
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    ),
    url(${DalkongBG});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px); /* Subtract the height of the input area */
  overflow-y: auto;

  width: 1800px;
  max-height: 700px;

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
// export const MessageContainer = styled.div<MessageProps>`
//   padding: 10px;
//   margin-bottom: 30px;
//   width: fit-content;
//   max-width: 60%;
//   background-color: ${({ isUser }) => (isUser ? "#B5E4F8" : "#F8A31B")};
//   border-radius: ${({ isUser }) =>
//     isUser ? "50px 50px 5px 50px" : "50px 50px 50px 5px"};
//   margin-left: ${({ isUser }) => (isUser ? "auto" : "0.4rem")};

//   color: black;
//   font-weight: 400;
//   font-size: 1.6rem;
//   line-height: 2rem;
//   word-break: break-all;
//   display: flex;
//   justify-content: center;
// `;

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  ${({ isUser }) =>
    isUser ? "flex-direction: row-reverse;" : "flex-direction: row;"}

  margin-bottom: 20px;
`;

export const UserImage = styled.div<MessageProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: ${({ isUser }) =>
    isUser ? `url(${user2})` : `url(${user1})`};
  background-size: cover;
`;

export const Message = styled.div<{ isUser: boolean }>`
  background-color: ${({ isUser }) => (isUser ? "#F9EB54" : "#B5E4F8")};
  color: #333;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding-left: 20px;
  padding-right: 20px;
  /* 세로 중앙 정렬을 위한 스타일 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  margin-left: ${({ isUser }) => (isUser ? "auto" : "10px")};
  margin-right: ${({ isUser }) => (isUser ? "10px" : "auto")};
  max-width: 60%;
  word-break: break-all;
  width: fit-content;

  font-size: 30px;
`;
