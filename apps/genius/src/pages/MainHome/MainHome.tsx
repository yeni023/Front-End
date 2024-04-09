import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Styles from "./MainHomeStyle";

const MainHome: React.FC = () => {
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    setAnimationVisible(true);
  }, []);

  const startAnimation = () => {
    // 원하는 동작 추가
  };

  return (
    <Styles.AppContainer className="app-container">
      <Styles.Navbar className="navbar">
        <Styles.MainMenu className="main-menu">
          <Styles.MenuItem>
            <Link to="/" style={{textDecoration: 'none', color: '#8DD1BD'}}>LOGO</Link>
          </Styles.MenuItem>

          <Styles.MenuItem>
            주요기능
            <Styles.SubMenu className="sub-menu">
              <Styles.SubMenuItem to="/CreateStory">동화제작</Styles.SubMenuItem>
              <Styles.SubMenuItem to="/Store">상점</Styles.SubMenuItem>
            </Styles.SubMenu>
          </Styles.MenuItem>

          <Styles.MenuItem>
            동화찾기
            <Styles.SubMenu className="sub-menu">
              <Styles.SubMenuItem to="/PopularStories">인기동화</Styles.SubMenuItem>
              <Styles.SubMenuItem to="/MyStories">나의동화</Styles.SubMenuItem>
              <Styles.SubMenuItem to="/Search">검색</Styles.SubMenuItem>
            </Styles.SubMenu>
          </Styles.MenuItem>

          <Styles.MenuItem>
            <Link to="/" style={{ textDecoration: 'none', color: '#8DD1BD' }}>고객센터</Link>
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
      </main>
    </Styles.AppContainer>
  );
};

export default MainHome;
