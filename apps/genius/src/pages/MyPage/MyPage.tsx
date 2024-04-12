import {
    PageContainer,
    TopBar,
    Logo,
    NavButton,
    ButtonGroup,
    ImageSection,
    ColorSection,
    ProfileButton,
    NameButton,
    IDButton,
    SocialButton,
    SocialButtonsContainer,
    SocialImage,
    SeedNumButton,
    BookButton,
    FlowerButton,
    ForestButton,
    TopButtonContainer,
    BottomButtonContainer
  } from './MyPage';
import bgImage from '../../assets/images/MyPageBG.svg';
import profileImage from '../../assets/images/MyProfile.svg';
import followingImage from '../../assets/images/Following.svg';
import followerImage from '../../assets/images/Follower.svg';
import seedNumImage from '../../assets/images/SeedNum.svg';

const MyPage: React.FC = () => {
    return (
      <PageContainer>
        <TopBar>
          <Logo src="path_to_logo.png" alt="Logo" />
          <ButtonGroup>
            <NavButton>Find a Fairy Tale</NavButton>
            <NavButton>Customer Support</NavButton>
            <NavButton>My Page</NavButton>
          </ButtonGroup>
        </TopBar>
        <ImageSection bgImage={bgImage}>
          <ProfileButton image={profileImage} onClick={() => console.log('Profile button clicked!')} />
          <NameButton onClick={() => console.log('Name button clicked!')}>박예은</NameButton>
          <IDButton onClick={() => console.log('ID button clicked!')}>_.zer023</IDButton>
          <SocialButtonsContainer>
            <SocialButton onClick={() => console.log('Following button clicked!')}>
                <SocialImage src={followingImage} alt="Following"/>
            </SocialButton>
            <SocialButton onClick={() => console.log('Follower button clicked!')}>
                <SocialImage src={followerImage} alt="Follower"/>
            </SocialButton>
          </SocialButtonsContainer>
          <SeedNumButton onClick={() => console.log('SeedNum button clicked!')}>
            <SocialImage src={seedNumImage} alt="SeedNum"/>
          </SeedNumButton>
        </ImageSection>
        <ColorSection>
          <TopButtonContainer>
            <BookButton onClick={() => console.log('Book button clicked!')}/>
            <FlowerButton onClick={() => console.log('Flower button clicked!')}/>
          </TopButtonContainer>
          <BottomButtonContainer>
            <ForestButton onClick={() => console.log('Forest button clicked!')}/>
          </BottomButtonContainer>
        </ColorSection>
      </PageContainer>
    );
};
  
export default MyPage;
  