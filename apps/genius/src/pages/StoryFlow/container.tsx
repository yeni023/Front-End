import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { LogoImage } from "./styles";
import logoImage from "../../assets/images/logo.png";

type HeaderElementsType = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

// DalKong Header 시작
const HeaderElementsData: HeaderElementsType[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(0);
      console.log("장르 선택");
    }
  },
  {
    text1: "STEP 2",
    text2: "정보 입력",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(1);
      console.log("정보 입력");
    }
  },
  {
    text1: "STEP 3",
    text2: "이야기 생성",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(2);
      console.log("이야기 생성");
    }
  },
  {
    text1: "STEP 4",
    text2: "이야기 확인",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(3);
      console.log("이야기 확인");
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
    <S.HeaderElement
      style={{
        backgroundColor: highlight ? "rgba(208, 87, 169, 0.25)" : "transparent",
        width: "100px",
        height: "70px",
        padding: "0 10px",
        borderRadius: "10px",
        margin: "0 5px"
      }}
    >
      <div>
        <p style={{ fontSize: size, color: color }}>{text1}</p>
        <p style={{ fontSize: size, color: color }}>{text2}</p>
      </div>
    </S.HeaderElement>
  );
};

// DalKong Header 여기 함수까지
export const Header = ({ currentPage }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  useEffect(() => {
    if (currentPage === "GenrePage") {
      setSelectedStepIndex(0);
    } else if (currentPage === "MakeBook") {
      setSelectedStepIndex(3);
    } else if (currentPage === "ChatDC") {
      setSelectedStepIndex(2);
    } else if (currentPage === "BasicInfo") {
      setSelectedStepIndex(1);
    } else if (currentPage === "DCRoading") {
      setSelectedStepIndex(2);
    }
  }, [currentPage]);
  return (
    <S.Header>
      <LogoImage src={logoImage} alt="Logo" style={{ marginRight: "10px" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {HeaderElementsData.map((data, index) => (
          <>
            <div key={index}>
              <HeaderElementText
                text1={data.text1}
                text2={data.text2}
                size={data.size}
                color={data.color}
                highlight={selectedStepIndex === index}
              />
            </div>
            {index < HeaderElementsData.length - 1 && (
              // 마지막 단계 이후가 아니라면 검정색 화살표 추가
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#9D9D9D",
                  width: "40px",
                  textAlign: "center"
                }}
              >
                {">"}
              </div>
            )}
          </>
        ))}
      </div>
    </S.Header>
  );
};

// 여기에서부터 AC Header
type HeaderElementsType2 = {
  text1: string;
  text2: string;
  size: number;
  color: string;
  action: () => void;
};

const HeaderElementsData2: HeaderElementsType2[] = [
  {
    text1: "STEP 1",
    text2: "장르 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(0);
      console.log("장르 선택");
    }
  },
  {
    text1: "STEP 2",
    text2: "주제 선택",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(1);
      console.log("주제 선택");
    }
  },
  {
    text1: "STEP 3",
    text2: "이야기 생성",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(2);
      console.log("이야기 생성");
    }
  },
  {
    text1: "STEP 4",
    text2: "이야기 확인",
    size: 17,
    color: "#9D9D9D",
    action: () => {
      setSelectedStepIndex(3);
      console.log("이야기 확인");
    }
  }
];

const HeaderElementText2 = ({
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
    <S.HeaderElement
      style={{
        backgroundColor: highlight ? "rgba(171, 225, 209, 0.5)" : "transparent",
        width: "100px",
        height: "70px",
        padding: "0 10px",
        borderRadius: "10px",
        margin: "0 5px"
      }}
    >
      <div>
        <p style={{ fontSize: size, color: color }}>{text1}</p>
        <p style={{ fontSize: size, color: color }}>{text2}</p>
      </div>
    </S.HeaderElement>
  );
};

export const Header2 = ({ currentPage }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  useEffect(() => {
    if (currentPage === "Genre2") {
      setSelectedStepIndex(0);
    } else if (currentPage === "MakeBook2") {
      setSelectedStepIndex(3);
    } else if (currentPage === "ThemePage") {
      setSelectedStepIndex(1);
    } else if (currentPage === "ThemePageNext") {
      setSelectedStepIndex(1);
    } else if (currentPage === "SelectLevel") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ConfirmLevel") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ChatAC") {
      setSelectedStepIndex(2);
    } else if (currentPage === "ACRoading") {
      setSelectedStepIndex(2);
    }
  }, [currentPage]);
  return (
    <S.Header2>
      <LogoImage src={logoImage} alt="Logo" style={{ marginRight: "10px" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {HeaderElementsData2.map((data, index) => (
          <>
            <div key={index}>
              <HeaderElementText2
                text1={data.text1}
                text2={data.text2}
                size={data.size}
                color={data.color}
                highlight={selectedStepIndex === index}
              />
            </div>
            {index < HeaderElementsData2.length - 1 && (
              // 마지막 단계 이후가 아니라면 검정색 화살표 추가
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#9D9D9D",
                  width: "40px",
                  textAlign: "center"
                }}
              >
                {">"}
              </div>
            )}
          </>
        ))}
      </div>
    </S.Header2>
  );
};

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
