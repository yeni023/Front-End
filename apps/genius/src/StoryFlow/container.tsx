import * as S from "./styles";
import RightAngleBracket from "../assets/StoryFlow/RightAngleBracket.svg";

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
    action: () => { }
  },
  {
    text1: "STEP 2",
    text2: "주제 선택",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  },
  {
    text1: "STEP 3",
    text2: "기본 정보",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  },
  {
    text1: "STEP 4",
    text2: "도입부 컨펌",
    size: 24,
    color: "#9D9D9D",
    action: () => { }
  }
];

const HeaderElementText = ({
  text1,
  text2,
  size,
  color
}: {
  text1: string;
  text2: string;
  size: number;
  color: string;
}) => {
  return (
    <S.HeaderElement>
      <p style={{ fontSize: size, color: color }}>{text1}</p>
      <p style={{ fontSize: size, color: color }}>{text2}</p>
    </S.HeaderElement>
  );
};

export const Header = () => {
  return (
    <S.Header>
      <h1 style={{ paddingLeft: "50px" }}>Logo</h1>
      {HeaderElementsData.map((data, index) => (
        <>
          {index ? (
            <img src={RightAngleBracket} alt="RightAngleBracket" />
          ) : null}
          <HeaderElementText
            key={index}
            text1={data.text1}
            text2={data.text2}
            size={data.size}
            color={data.color}
          />
        </>
      ))}
    </S.Header>
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
