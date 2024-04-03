import React, { useState, useRef, useEffect } from "react";
import * as Styles from "./BasicInfoAC2Style";

interface Message {
  text: string;
  isUser: boolean;
}

const BasicInfoAC2: React.FC = () => {
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
    <Styles.DCBackgroundContainer>
      <Styles.MessagesList>
        {messages.map((message, index) => (
          <Styles.MessageContainer
            key={index}
            isUser={message.isUser}
            alignRight={!message.isUser} // Pass alignRight prop based on message type
          >
            {message.text}
          </Styles.MessageContainer>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
      <form onSubmit={handleSubmit}>
        <Styles.InputContainer>
          <Styles.Input
            type="text"
            placeholder="알콩이에게 보낼 메시지를 입력해주세요"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Styles.Button type="submit">Send</Styles.Button>
        </Styles.InputContainer>
      </form>
    </Styles.DCBackgroundContainer>
  );
};

export default BasicInfoAC2;
