import React, { useState, useRef, useEffect } from "react";
import * as Styles from "./ChatDCStyle";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatDC: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (message: string) => {
    try {
      // 전송이 잘 되었음을 콘솔에 기록
      console.log("Message sent successfully:", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: true },
        { text: `Your message is: "${message}"`, isUser: false }
      ]);
      setMessage("");
    } catch (error) {
      // 전송 중 오류 발생 시 콘솔에 에러 메시지 기록
      console.error("Error sending message:", error);
    }
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
          <Styles.MessageContainer key={index} isUser={message.isUser}>
            <Styles.UserImage isUser={message.isUser} />
            <Styles.Message isUser={message.isUser}>
              {message.text}
            </Styles.Message>
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

export default ChatDC;
