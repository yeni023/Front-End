import React, { useState, useRef, useEffect } from "react";
import * as C from "../../pages/StoryFlow/container";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatACStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  questions,
  initialChoices,
  finalChoices
} from "./ACchatMessages";

const ChatAC: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages("예은"));
  const [selectedChoice, setSelectedChoice] = useState("");
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const currentPage = "ChatAC";

  useEffect(() => {
    if (questionIndex !== -1) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[questionIndex].text, isUser: false }
      ]);
    }
  }, [questionIndex]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleChoiceSelect = (choice: string) => {
    if (choice === initialChoices[1]) {
      setMessages([
        ...messages,
        { text: initialChoices[1], isUser: true },
        { ...notReadyMessage }
      ]);
    } else if (choice === initialChoices[0] || choice === finalChoices[1]) {
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        { ...startStoryMessage }
      ]);
      setQuestionIndex(0);
    } else if (choice === finalChoices[0]) {
      navigate("/MainHome");
    } else if (questionIndex !== -1) {
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setQuestionIndex(nextQuestionIndex);
        setMessages([...messages, { text: ` ${choice}`, isUser: true }]);
      }
    }
    setSelectedChoice(choice);
  };

  return (
    <Styles.ACBackgroundContainer>
      <C.Header2 currentPage={currentPage} />
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
              (selectedChoice === "" ? (
                <Choices
                  choices={initialChoices}
                  onSelect={handleChoiceSelect}
                />
              ) : selectedChoice === initialChoices[1] ? (
                <Choices choices={finalChoices} onSelect={handleChoiceSelect} />
              ) : (
                <Choices
                  choices={questions[questionIndex].choices}
                  onSelect={handleChoiceSelect}
                />
              ))}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
    </Styles.ACBackgroundContainer>
  );
};

export default ChatAC;
