import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Styles from "./MainHomeStyle";

const MainHome: React.FC = () => {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [thirdSectionVisible, setThirdSectionVisible] = useState(false);
  const [fourthSectionVisible, setFourthSectionVisible] = useState(false);

  useEffect(() => {
    setAnimationVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const secondSection = document.getElementById('secondSection')?.offsetTop || 0;
      const thirdSection = document.getElementById('thirdSection')?.offsetTop || 0;
      const fourthSection = document.getElementById('fourthSection')?.offsetTop || 0;

      if (scrollPosition > secondSection) {
        setSecondSectionVisible(true);
      }

      if (scrollPosition > thirdSection) {
        setThirdSectionVisible(true);
      }

      if (scrollPosition > fourthSection) {
        setFourthSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startAnimation = () => {
    // 원하는 동작 추가
  };

  return (
    <Styles.AppContainer className="app-container">
      <Styles.Navbar className="navbar">
        <Styles.MainMenu className="main-menu">
          <Styles.MenuItem>
            <Link to="/MainHome">
              <Styles.LogoImage src={`src/assets/images/logo.png`} alt="Logo" />
            </Link>
          </Styles.MenuItem>

          <Styles.MenuItem>
            주요기능
            <Styles.SubMenu className="sub-menu">
              <Styles.SubMenuItem to="/CreateStory">동화제작</Styles.SubMenuItem>
              <Styles.SubMenuItem to="/Store">씨앗상점</Styles.SubMenuItem>
            </Styles.SubMenu>
          </Styles.MenuItem>

          <Styles.MenuItem>
            동화찾기
            <Styles.SubMenu className="sub-menu">
              <Styles.SubMenuItem to="/PopularBook">인기동화</Styles.SubMenuItem>
              <Styles.SubMenuItem to="/Search">검색</Styles.SubMenuItem>
            </Styles.SubMenu>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Link to="/Service" style={{ textDecoration: 'none', color: '#9d9d9d' }}>고객센터</Link>
          </Styles.MenuItem>
          <Styles.MenuItem>
            <Link to="/Mypage" style={{ textDecoration: 'none', color: '#8DD1BD' }}>마이페이지</Link>
          </Styles.MenuItem>
        </Styles.MainMenu>

        <div className="login-signup">
          <Link to="/Login">
            <Styles.LoginSignupButton>Login</Styles.LoginSignupButton>
          </Link>
          <Link to="/SignUp">
            <Styles.LoginSignupButton>회원가입</Styles.LoginSignupButton>
          </Link>
        </div>
      </Styles.Navbar>
      <main>
        <Styles.MainSection className={`main-section ${animationVisible ? "visible" : ""}`}>
          <Styles.MainTitle className="main-title">세상에 단 ‘하나’뿐인 나만의 동화책 이야기 꽃을 피워보세요!</Styles.MainTitle>
          <Styles.MainDescription className="main-description">
            세상에 있는 흔한 동화책 이야기와 결말은 너무 익숙해.<br />
            나만의 이야기로 동화책을 꾸미면 어떨까?<br />
            나도 동화책을 만들 수 있을까?<br />
            뭐? 어렵지 않다고?
          </Styles.MainDescription>
          <Styles.AnimationContainer className="animation-container">
            <Link to="/CreateStory">
              <Styles.CreateStoryButton onClick={startAnimation} className="create-story-button">
                나만의 동화 만들기
              </Styles.CreateStoryButton>
            </Link>
          </Styles.AnimationContainer>
        </Styles.MainSection>

        <Styles.SecondSection id="secondSection" className={`second-section ${secondSectionVisible ? "visible" : ""}`}>
          <img src={`src/assets/images/main2.png`} alt="Main 3" />
          <p>아이와 부모가 함께!<br></br>아이는 동화책을 만들며 성취하고,<br></br>부모는 아이의 동화를 자랑하세요!</p>
        </Styles.SecondSection>

        <Styles.ThirdSection id="thirdSection" className={`third-section ${thirdSectionVisible ? "visible" : ""}`}>
          <p>우리 아이의 상상력을 키워봐요!<br></br>아이는 동화책을 만들며 성취하고,<br></br>부모는 아이의 동화를 자랑하세요!</p>
          <img src={`src/assets/images/main1.png`} alt="Main 1" />
        </Styles.ThirdSection>

        <Styles.FourthSection id="fourthSection" className={`fourth-section ${fourthSectionVisible ? "visible" : ""}`}>
          <img src={`src/assets/images/main3.png`} alt="Main 3" />
          {<p>아이들에게 친숙한 화면<br></br>아이는 동화책을 만들며 성취하고,<br></br>부모는 아이의 동화를 자랑하세요!</p>}
        </Styles.FourthSection>
      </main>
    </Styles.AppContainer>
  );
};

export default MainHome;
