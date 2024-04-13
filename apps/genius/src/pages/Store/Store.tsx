import React from 'react';
import * as StoreStyle from './StoreStyle';
import Navbar from '../Navbar/Navbar';

const Store: React.FC = () => {
  return (
    <StoreStyle.Container>
      <Navbar />
      <StoreStyle.Title>씨앗 상점</StoreStyle.Title>
      <StoreStyle.ItemBox>
        <StoreStyle.Image src="src/assets/images/store1.svg" alt="씨앗 5개" />
        <StoreStyle.Seeds>씨앗 5개</StoreStyle.Seeds>
        <StoreStyle.Price>3,000￦</StoreStyle.Price>
      </StoreStyle.ItemBox>
      <StoreStyle.ItemBox>
        <StoreStyle.Image src="src/assets/images/store1.svg" alt="씨앗 10개" />
        <StoreStyle.Seeds>씨앗 10개</StoreStyle.Seeds>
        <StoreStyle.Price>5,000￦</StoreStyle.Price>
      </StoreStyle.ItemBox>
      <StoreStyle.ItemBox>
        <StoreStyle.Image src="src/assets/images/store1.svg" alt="씨앗 20개" />
        <StoreStyle.Seeds>씨앗 20개</StoreStyle.Seeds>
        <StoreStyle.Price>8,000￦</StoreStyle.Price>
      </StoreStyle.ItemBox>
      <StoreStyle.ItemBox>
        <StoreStyle.Image src="src/assets/images/store2.svg" alt="장미 뱃지" />
        <StoreStyle.Seeds> 장미 뱃지</StoreStyle.Seeds>
        <StoreStyle.Price>2,000￦</StoreStyle.Price>
      </StoreStyle.ItemBox>
      <StoreStyle.ItemBox>
        <StoreStyle.Image src="src/assets/images/store3.svg" alt="개나리 뱃지" />
        <StoreStyle.Seeds> 개나리 뱃지</StoreStyle.Seeds>
        <StoreStyle.Price>2,000￦</StoreStyle.Price>
      </StoreStyle.ItemBox>
    </StoreStyle.Container>
  );
};

export default Store;
