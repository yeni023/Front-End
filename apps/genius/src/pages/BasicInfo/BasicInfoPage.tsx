import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import alcong_bg from "../../assets/images/alcong_bg.png";

interface Message {
  text: string;
  isUser: boolean;
}

const InputContainer = styled.div`
  width: 920px;
  height: 91px;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px; /* Adjust as needed */
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
  position: relative;
`;

const MessagesList = styled.div`
  width: 1500px;
  max-height: 500px;
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

const MessageContainer = styled.div<MessageContainerProps>`
  padding: 10px;
  margin-bottom: 30px;
  width: fit-content;
  max-width: 60%;
  background-color: ${({ isUser }) => (isUser ? "#B5E4F8" : "#F8A31B")};
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

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <BackgroundContainer>
      <MessagesList>
        {messages.map((message, index) => (
          <MessageContainer
            key={index}
            isUser={message.isUser}
            alignRight={!message.isUser} // Pass alignRight prop based on message type
          >
            <p>
              <b>{message.isUser ? "User" : "AI"}</b>: {message.text}
            </p>
          </MessageContainer>
        ))}
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
