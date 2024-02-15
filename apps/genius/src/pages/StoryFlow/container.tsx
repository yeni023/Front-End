import React, { useState } from 'react';
import * as S from "./styles";
import RightAngleBracket from "../../assets/StoryFlow/RightAngleBracket.svg";

type HeaderElementsType = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

const HeaderElementsData: HeaderElementsType[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 24,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(0);
      console.log("장르 선택");
    }
  },
  {
    text1: "STEP 2",
    text2: "주제 선택",
    size: 24,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(1);
      console.log("주제 선택");
    }
  },
  {
    text1: "STEP 3",
    text2: "기본 정보",
    size: 24,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(2);
      console.log("기본 정보");
    }
  },
  {
    text1: "STEP 4",
    text2: "도입부 컨펌",
    size: 24,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(3);
      console.log("도입부 컨펌");
    }
  }
];

const HeaderElementText = ({
  text1,
  text2,
  size,
  color,
  highlight
}: {
  text1: string;
  text2: string;
  size: number;
  color: string;
  highlight: boolean;
}) => {
  return (
    <S.HeaderElement style={{backgroundColor: highlight ? '#f5deb3' : 'transparent', width: '170px', padding: '20px',borderRadius: '50px'}}>
      <p style={{ fontSize: size, color: color }}>{text1}</p>
      <p style={{ fontSize: size, color: color }}>{text2}</p>
    </S.HeaderElement>
  );
};

export const Header = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(3);
  return (
    <S.Header>
      <h1>Logo</h1>
      {HeaderElementsData.map((data, index) => (
        <div key={index}>
          <HeaderElementText 
            text1={data.text1}
            text2={data.text2}
            size={data.size}
            color={data.color}
            highlight={selectedStepIndex === index}
          />
        </div>
      ))}
    </S.Header>
  );
};

//이게 헤더
export const Content1 = () => {
  return (
    <S.Content1>
      <S.Content1Title>
        <S.Content1TitleInner>
          <h1>1. 제목</h1>
          <S.Content1InputTitle>
            <h1 style={{ color: "black", fontSize: "2.5em" }}>
              미미의 곰돌이를 찾아서
            </h1>
          </S.Content1InputTitle>
        </S.Content1TitleInner>
      </S.Content1Title>
      <S.Content1Subject>
        <S.Content1SubjectInner>
          <h1>2. 주제</h1>
          <S.Content1InputSubject>
            <h1 style={{ color: "black", fontSize: "2.5em", fontWeight: 400 }}>
              김미미는 갈색 머리에 까만 눈을 가지고 있어요. 미미는 매우 용감감한
              성격을 가진 소녀예요.
            </h1>
          </S.Content1InputSubject>
        </S.Content1SubjectInner>
      </S.Content1Subject>
    </S.Content1>
  );
};

export const Content2 = () => {
  return (
    <S.Content2>
      <S.Content2Element>
        <S.Content2ElementInner />
      </S.Content2Element>
      <S.Content2Element>
        <S.Content2ElementInner />
      </S.Content2Element>
      <S.Content2Element>
        <S.Content2ElementInner />
      </S.Content2Element>
      <S.Content2Element>
        <S.Content2ElementInner />
      </S.Content2Element>
      <S.Content2Element>
        <S.Content2ElementInner />
      </S.Content2Element>
    </S.Content2>
  );
};
