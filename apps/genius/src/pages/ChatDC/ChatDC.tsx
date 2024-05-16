// ChatDC.tsx
import React, { useState, useRef, useEffect } from "react";
import * as C from "../../pages/StoryFlow/container";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatDCStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  story1Message,
  story2Message,
  initialChoices,
  finalChoices
} from "./DCchatMessages";

const ChatDC: React.FC = () => {
  const [selectedChoice, setSelectedChoice] = useState("");
  const [messages, setMessages] = useState(initialMessages("예은"));
  const [userMessage, setUserMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentPage = "ChatDC";
  const navigate = useNavigate();

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && !lastMessage.isUser) {
      if (lastMessage.text === story1Message.text) {
        setMessages([...messages, { ...story2Message }]);
      } else if (lastMessage.text === story2Message.text) {
        setShowChat(true);
      }
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
    if (choice === initialChoices[1]) {
      setMessages([
        ...messages,
        { text: initialChoices[1], isUser: true },
        { ...notReadyMessage }
      ]);
      setShowChat(false);
    } else if (choice === initialChoices[0] || choice === finalChoices[1]) {
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        { ...startStoryMessage },
        { ...story1Message }
      ]);
    } else if (choice === finalChoices[0]) {
      navigate("/MainHome");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: userMessage.trim(), isUser: true },
        { ...story1Message },
        { ...story2Message }
      ]);
      setUserMessage("");
    }
  };

  return (
    <Styles.DCBackgroundContainer>
      <C.Header currentPage={currentPage} />
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
                  choices={initialChoices}
                  onSelect={handleChoiceSelect}
                />
              )}
            {!message.isUser &&
              index === messages.length - 1 &&
              selectedChoice === initialChoices[1] && (
                <Choices choices={finalChoices} onSelect={handleChoiceSelect} />
              )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
      {showChat && (
        <form onSubmit={handleSubmit}>
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="달콩이에게 보낼 메시지를 입력해주세요"
              value={userMessage}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <Styles.Button type="submit">전송</Styles.Button>
          </Styles.InputContainer>
        </form>
      )}
    </Styles.DCBackgroundContainer>
  );
};

export default ChatDC;
