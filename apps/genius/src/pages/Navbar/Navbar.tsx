// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './NavbarStyle';

const Navbar: React.FC = () => {
  return (
    <Styles.Navbar>
      <Styles.MainMenu>
        <Styles.MenuItem>
          <Link to="/MainHome" style={{textDecoration: 'none', color: '#8DD1BD'}}>LOGO</Link>
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
            <Styles.SubMenuItem to="/PopularStories">인기동화</Styles.SubMenuItem>
            <Styles.SubMenuItem to="/MyBook">나의동화</Styles.SubMenuItem>
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
  );
};

export default Navbar;
