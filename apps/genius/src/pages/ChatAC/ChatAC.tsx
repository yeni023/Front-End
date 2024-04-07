import React, { useState, useRef, useEffect } from "react";
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
      // 초기 선택지 배열로 참조
      setMessages([
        ...messages,
        { text: initialChoices[1], isUser: true },
        { ...notReadyMessage }
      ]);
    } else if (choice === initialChoices[0] || choice === finalChoices[1]) {
      // 초기 선택지 및 마지막 선택지 배열로 참조
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        { ...startStoryMessage }
      ]);
      setQuestionIndex(0);
    } else if (choice === finalChoices[0]) {
      // 마지막 선택지 배열로 참조
      navigate("/MainHome");
    } else if (questionIndex !== -1) {
      const nextQuestionIndex = questionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setQuestionIndex(nextQuestionIndex);
        setMessages([...messages, { text: ` ${choice}`, isUser: true }]);
      } else {
        // 모든 질문이 완료된 후에 추가적인 로직을 수행할 수 있음
      }
    }
    setSelectedChoice(choice);
  };

  return (
    <Styles.ACBackgroundContainer>
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
                  choices={initialChoices} // 초기 선택지 사용
                  onSelect={handleChoiceSelect}
                />
              ) : selectedChoice === initialChoices[1] ? (
                <Choices
                  choices={finalChoices} // 마지막 선택지 사용
                  onSelect={handleChoiceSelect}
                />
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
