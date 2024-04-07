import React, { useState, useRef, useEffect } from "react";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatACStyle";
import { useNavigate } from "react-router-dom";
import {
  initialMessages,
  notReadyMessage,
  startStoryMessage,
  questions
} from "./ACchatMessages";

const ChatAC: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
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
    if (choice === "아니") {
      setMessages([
        ...messages,
        { text: "아니", isUser: true },
        { ...notReadyMessage }
      ]);
    } else if (choice === "동화 이어서 만들기" || choice === "응, 준비됐어") {
      setMessages([
        ...messages,
        { text: choice, isUser: true },
        { ...startStoryMessage }
      ]);
      setQuestionIndex(0);
    } else if (choice === "메인 홈으로 돌아가기") {
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
                  choices={["응, 준비됐어", "아니"]}
                  onSelect={handleChoiceSelect}
                />
              ) : selectedChoice === "아니" ? (
                <Choices
                  choices={["메인 홈으로 돌아가기", "동화 이어서 만들기"]}
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
