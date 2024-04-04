import React, { useState, useRef } from "react";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatACStyle";

// 메인 채팅 컴포넌트
const ChatAC: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕! 나는 너를 도와줄 달콩이야.", isUser: false },
    { text: "내 질문에 선택지를 잘 골라주면 돼.", isUser: false }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null); // useRef로 messagesEndRef 정의

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    setMessages([
      ...messages,
      { text: `선택한 것: ${choice}`, isUser: true },
      { text: "상대방의 CHOICE 컴포넌트", isUser: false } // 새로운 상대방의 메시지와 CHOICE 컴포넌트 추가
    ]);
  };

  return (
    <Styles.DCBackgroundContainer>
      <Styles.MessagesList>
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <Styles.MessageContainer
              isUser={message.isUser}
              alignRight={!message.isUser} // Pass alignRight prop based on message type
            >
              {message.text}
            </Styles.MessageContainer>
            {!message.isUser &&
              index === messages.length - 1 && // Show choices for the last non-user message
              selectedChoice === "" && (
                <Choices
                  choices={["선택지 1", "선택지 2", "선택지 3"]}
                  onSelect={handleChoiceSelect}
                />
              )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
    </Styles.DCBackgroundContainer>
  );
};

export default ChatAC;
