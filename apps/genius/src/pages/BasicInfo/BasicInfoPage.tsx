import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MessageItem = styled.li<{ isOwnMessage: boolean }>`
  background-color: ${(props) => (props.isOwnMessage ? "#DCF8C6" : "#F0F0F0")};
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  width: calc(100% - 70px);
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 60px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

interface Message {
  id: number;
  text: string;
  isOwnMessage: boolean;
}

const BasicInfoPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSend = () => {
    if (newMessage.trim() === "") return;
    const newMessageObject: Message = {
      id: messages.length,
      text: newMessage,
      isOwnMessage: true
    };
    setMessages([...messages, newMessageObject]);
    setNewMessage("");
  };

  return (
    <Container>
      <MessageList>
        {messages.map((message) => (
          <MessageItem key={message.id} isOwnMessage={message.isOwnMessage}>
            {message.text}
          </MessageItem>
        ))}
      </MessageList>
      <InputContainer>
        <Input
          type="text"
          placeholder="메시지를 입력하세요"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button onClick={handleMessageSend}>전송</Button>
      </InputContainer>
    </Container>
  );
};

export default BasicInfoPage;
