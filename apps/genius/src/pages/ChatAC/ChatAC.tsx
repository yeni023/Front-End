import React, { useState, useRef, useEffect } from "react";
import Choices from "../../components/ChatAC/Choices";
import * as Styles from "./ChatACStyle";
import { questions } from "./questionsData";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatAC: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAIAsking, setIsAIAsking] = useState<boolean>(true);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        text: "안녕! 나는 예은이의 동화 만들기를 도와줄 알콩이야.",
        isUser: false
      },
      { text: "내 질문에 대한 선택지 1개를 골라주면 돼.", isUser: false },
      { text: questions[questionIndex].text, isUser: false }
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleChoiceSelect = (choice: string) => {
    setIsAIAsking(true);
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
      setMessages([
        ...messages,
        { text: ` ${choice}`, isUser: true },
        { text: ` ${questions[nextQuestionIndex].text}`, isUser: false }
      ]);
    } else {
      // 모든 질문이 완료된 후에 추가적인 로직을 수행할 수 있음
    }
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
            {!message.isUser && isAIAsking && index === messages.length - 1 && (
              <Choices
                choices={questions[questionIndex].choices}
                onSelect={handleChoiceSelect}
              />
            )}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </Styles.MessagesList>
    </Styles.ACBackgroundContainer>
  );
};

export default ChatAC;
