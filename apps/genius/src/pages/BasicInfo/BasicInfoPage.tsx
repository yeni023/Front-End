import React, { useState } from "react";
import styled from "styled-components";
import alcong_bg from "../../assets/images/alcong_bg.png";

interface Message {
  text: string;
  isUser: boolean;
}

interface MessageListProps {
  messages: Message[];
}

const AppContainer = styled.div`
  background-image: url(${alcong_bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

const MessagesList = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

interface MessageContainerProps {
  isUser: boolean;
}

const MessageContainer = styled.div<MessageContainerProps>`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ isUser }) => (isUser ? "#cce5ff" : "#f0f0f0")};
  border-radius: 5px;
`;

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

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

  return (
    <AppContainer>
      <ChatBox>
        <h1>Chat App</h1>
        <MessagesList>
          {messages.map((message, index) => (
            <MessageContainer key={index} isUser={message.isUser}>
              <p>
                <b>{message.isUser ? "User" : "AI"}</b>: {message.text}
              </p>
            </MessageContainer>
          ))}
        </MessagesList>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </ChatBox>
    </AppContainer>
  );
};

export default ChatApp;
