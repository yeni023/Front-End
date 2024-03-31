import React, { useState } from "react";
import styled from "styled-components";
import Choices from "../../components/BasicInfoDC/Choices";

// 스타일드 컴포넌트로 메시지 컨테이너 정의
interface MessageContainerProps {
  isUser: boolean;
  alignRight?: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
  padding: 10px;
  margin-bottom: 30px;
  width: fit-content;
  max-width: 60%;
  background-color: ${({ isUser }) =>
    isUser ? "#F8A31B" : "#B5E4F8"}; /* 수정된 부분 */
  border-radius: ${(props) =>
    props.isUser ? "50px 50px 5px 50px" : "50px 50px 50px 5px"};

  padding: ${(props) => (props.isUser ? "0.7rem 1.1rem" : "0.8rem 1.2rem")};
  margin-left: ${(props) =>
    props.alignRight
      ? "0.4rem"
      : "auto"}; // Conditional margin-left for alignment
  margin-right: ${(props) =>
    props.alignRight
      ? "auto"
      : "0.4rem"}; // Conditional margin-right for alignment
  color: black;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  word-break: break-all;
  display: flex;
  justify-content: center;
`;

// 메인 채팅 컴포넌트
const ChatComponent: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕! 나는 너를 도와줄 달콩이야.", alignRight: true },
    { text: "내 질문에 선택지를 잘 골라주면 돼.", alignRight: true }
  ]);

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    setMessages([
      ...messages,
      { text: `선택한 것: ${choice}`, alignRight: false }
    ]);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px"
      }}
    >
      {messages.map((message, index) => (
        <MessageContainer
          key={index}
          isUser={!message.alignRight}
          alignRight={message.alignRight}
        >
          {message.text}
        </MessageContainer>
      ))}
      {selectedChoice === "" && (
        <Choices
          choices={["선택지 1", "선택지 2", "선택지 3"]}
          onSelect={handleChoiceSelect}
        />
      )}
    </div>
  );
};

export default ChatComponent;
