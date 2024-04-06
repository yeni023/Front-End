// ChatDC.tsx
import React, { useState, useRef } from "react";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatDCStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  story1Message,
  story2Message
} from "./chatMessages";

const ChatDC: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    if (choice === "아니") {
      setMessages([
        ...messages,
        { text: "아니", isUser: true },
        { ...notReadyMessage }
      ]);
    } else if (choice === "동화 이어서 만들기") {
      setMessages([
        ...messages,
        { text: "동화 이어서 만들기", isUser: true },
        { ...startStoryMessage },
        { ...story1Message },
        { ...story2Message }
      ]);
    } else if (choice === "응, 준비됐어") {
      setMessages([
        ...messages,
        { text: "응, 준비됐어", isUser: true },
        { ...startStoryMessage },
        { ...story1Message },
        { ...story2Message }
      ]);
    } else if (choice === "메인 홈으로 돌아가기") {
      navigate("/MainHome");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Styles.DCBackgroundContainer>
      <Styles.MessagesList>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <Styles.MessageContainer isUser={message.isUser}>
              <Styles.UserImage isUser={message.isUser} />
              <Styles.Message isUser={message.isUser}>
                {message.text}
              </Styles.Message>
            </Styles.MessageContainer>

            {!message.isUser &&
              index === messages.length - 1 &&
              selectedChoice === "" && (
                <Choices
                  choices={["응, 준비됐어", "아니"]}
                  onSelect={handleChoiceSelect}
                />
              )}
            {!message.isUser &&
              index === messages.length - 1 &&
              selectedChoice === "아니" && (
                <Choices
                  choices={["메인 홈으로 돌아가기", "동화 이어서 만들기"]}
                  onSelect={handleChoiceSelect}
                />
              )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
      <form onSubmit={handleSubmit}>
        <Styles.InputContainer>
          <Styles.Input
            type="text"
            placeholder="알콩이에게 보낼 메시지를 입력해주세요"
          />
          <Styles.Button type="submit">Send</Styles.Button>
        </Styles.InputContainer>
      </form>
    </Styles.DCBackgroundContainer>
  );
};

export default ChatDC;
