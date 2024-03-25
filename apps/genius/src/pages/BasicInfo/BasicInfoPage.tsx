import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import alcong_bg from "../../assets/images/alcong_bg.png";

interface Message {
  text: string;
  isUser: boolean;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InputContainer = styled.div`
  width: 920px;
  height: 91px;
  top: 800px;
  display: flex;
  flex-direction: row;
  position: fixed;

  justify-content: center;
`;

const Input = styled.input`
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

const Button = styled.button`
  width: 60px;
  padding: 8px;
  border-radius: 0px 50px 50px 0px;
  background-color: #007bff;
  color: #fff;
`;

const BackgroundContainer = styled.div`
  background-image: url(${alcong_bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessagesList = styled.div`
  max-height: 500px;
  overflow-y: hidden; //스크롤 안보이도록
`;

interface MessageContainerProps {
  isUser: boolean;
}

const MessageContainer = styled.div<MessageContainerProps>`
  padding: 10px;
  margin-bottom: 10px;
  width: fit-content;
  max-width: 55%;
  background-color: ${({ isUser }) => (isUser ? "#B5E4F8" : "#F8A31B")};
  border-radius: ${(props) =>
    props.isUser ? "20px 20px 5px 20px" : "20px 20px 20px 5px"};

  padding: ${(props) => (props.isUser ? "0.7rem 1.1rem" : "0.8rem 1.2rem")};
  margin-left: 0.4rem;
  color: black;
  font-weight:;
  font-size: 0.97rem;
  line-height: 1.3rem;
  word-break: keep-all;

  margin-left: 0.4rem;

  display: flex;
  justify-content: center;
`;

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  //useRef를 사용하여 스크롤 조작을 위한 요소를 설정
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      { text: `Your message is: "${message}"`, isUser: false }
    ]);
    setMessage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSendMessage(message);
  };

  // useEffect를 사용하여 스크롤 위치 자동 조정:
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <BackgroundContainer>
      <MessagesList>
        {messages.map((message, index) => (
          <MessageContainer key={index} isUser={message.isUser}>
            <p>
              <b>{message.isUser ? "User" : "AI"}</b>: {message.text}
            </p>
          </MessageContainer>
        ))}
        {/* 마지막 메시지가 보여지도록 빈 div 추가: */}
        <div ref={messagesEndRef} />
      </MessagesList>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="알콩이에게 보낼 메시지를 입력해주세요"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button type="submit">Send</Button>
        </InputContainer>
      </form>
    </BackgroundContainer>
  );
};

export default ChatApp;
