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

interface Message {
  text: string;
  isUser: boolean;
}

const ChatAC: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [isAIAsking, setIsAIAsking] = useState<boolean>(true);
  const [questionIndex, setQuestionIndex] = useState<number>(-1); // 시작 시점에서는 질문 인덱스를 -1로 설정
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (questionIndex !== -1) {
      // 질문 인덱스가 -1이 아닌 경우에만 질문을 추가
      setMessages([
        ...messages,
        { text: questions[questionIndex].text, isUser: false }
      ]);
    }
  }, [questionIndex]); // questionIndex가 변경될 때마다 useEffect 실행

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleChoiceSelect = (choice: string) => {
    setIsAIAsking(true);
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
      setQuestionIndex(0); // 질문 인덱스를 0으로 설정하여 첫 번째 질문부터 시작
    } else if (choice === "메인 홈으로 돌아가기") {
      navigate("/MainHome");
    } else if (questionIndex !== -1) {
      // 질문에 대한 선택을 한 경우에만 다음 질문을 표시
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
              // 선택지 표시하는 부분 수정
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
