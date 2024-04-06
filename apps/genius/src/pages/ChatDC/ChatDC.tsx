// ChatDC.tsx
import React, { useState, useRef, useEffect } from "react";
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
  const [userMessage, setUserMessage] = useState(""); // 사용자의 메시지를 상태로 관리
  const [showChat, setShowChat] = useState(false); // 채팅창의 표시 여부를 관리
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 메시지 리스트가 변경될 때마다 마지막 메시지를 확인하여 달콩이로부터의 메시지인지 확인하고, 그에 따라 다음 스토리 메시지를 추가
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && !lastMessage.isUser) {
      if (lastMessage.text === story1Message.text) {
        setMessages([...messages, { ...story2Message }]);
      } else if (lastMessage.text === story2Message.text) {
        setShowChat(true); // 스토리가 전부 전달되었을 때 사용자에게 채팅창을 보이도록 설정
      }
    }
    // 스크롤을 아래로 이동
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    if (choice === "아니") {
      setMessages([
        ...messages,
        { text: "아니", isUser: true },
        { ...notReadyMessage }
      ]);
      setShowChat(false); // 아니를 선택했을 때 채팅창 숨김
    } else if (choice === "동화 이어서 만들기" || choice === "응, 준비됐어") {
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        { ...startStoryMessage },
        { ...story1Message }
      ]);
    } else if (choice === "메인 홈으로 돌아가기") {
      navigate("/MainHome");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 사용자가 입력한 메시지를 메시지 리스트에 추가
    setMessages([
      ...messages,
      { text: userMessage, isUser: true },
      { ...story1Message },
      { ...story2Message }
    ]);
    // 사용자가 입력한 메시지 초기화
    setUserMessage("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value); // 사용자가 입력한 메시지 업데이트
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
      {showChat && ( // showChat이 true일 때만 채팅창 표시
        <form onSubmit={handleSubmit}>
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="알콩이에게 보낼 메시지를 입력해주세요"
              value={userMessage} // 사용자가 입력한 메시지 표시
              onChange={handleChange} // 입력 시 호출되는 핸들러
            />
            <Styles.Button type="submit">Send</Styles.Button>
          </Styles.InputContainer>
        </form>
      )}
    </Styles.DCBackgroundContainer>
  );
};

export default ChatDC;
