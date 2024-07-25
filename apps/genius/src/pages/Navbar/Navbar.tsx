import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './NavbarStyle';

// 사용자 정보를 저장할 타입 정의
interface User {
  email: string;
  profImg: string;
}

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // localStorage에서 사용자 정보 가져오기
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/MainHome';
  };

  return (
    <Styles.Navbar>
      <Styles.MainMenu>
        <Styles.MenuItem>
          <Link to="/MainHome">
            <Styles.LogoImage src="src/assets/images/logo.png" alt="Logo" />
          </Link>
        </Styles.MenuItem>
        <Styles.MenuItem>
          주요기능
          <Styles.SubMenu>
            <Styles.SubMenuItem to="/CreateStory">동화제작</Styles.SubMenuItem>
            <Styles.SubMenuItem to="/Store">씨앗상점</Styles.SubMenuItem>
          </Styles.SubMenu>
        </Styles.MenuItem>
        <Styles.MenuItem>
          동화찾기
          <Styles.SubMenu>
            <Styles.SubMenuItem to="/PopularBook">인기동화</Styles.SubMenuItem>
            <Styles.SubMenuItem to="/Search">검색</Styles.SubMenuItem>
          </Styles.SubMenu>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.StyledLink to="/Service">고객센터</Styles.StyledLink>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.StyledMypageLink to="/Mypage">마이페이지</Styles.StyledMypageLink>
        </Styles.MenuItem>
      </Styles.MainMenu>

      <div className="login-signup">
        {user ? (
          <div>
            <Styles.ProfileContainer>
              <Styles.Idname>{user.email}</Styles.Idname>
              <Styles.ProfileImage
                src={user.profImg || 'src/assets/images/default-profile.png'}
                alt="profile"
              />
              <button onClick={handleLogout}>로그아웃</button>
            </Styles.ProfileContainer>
          </div>
        ) : (
          <>
            <Link to="/Login">
              <Styles.LoginSignupButton>Login</Styles.LoginSignupButton>
            </Link>
            <Link to="/SignUp">
              <Styles.LoginSignupButton>회원가입</Styles.LoginSignupButton>
            </Link>
          </>
        )}
      </div>
    </Styles.Navbar>
  );
};

export default Navbar;
