// PopularBook.tsx
import React, { useState } from 'react';
import * as PopularBookStyle from './PopularBookStyle';
import Navbar from '../Navbar/Navbar';

const PopluarBook: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('전체');
  const [selectedFilter, setSelectedFilter] = useState<string>('별점 높은순');

  // 동화 목록 데이터 받아오기 등의 로직 생략
  const books = [
    { id: 1, title: '동화 제목 1', image: 'book1.png' },
    { id: 2, title: '동화 제목 2', image: 'book1.png' },
    { id: 3, title: '동화 제목 3', image: 'book1.png' },
    { id: 4, title: '동화 제목 4', image: 'book1.png' },
    { id: 5, title: '동화 제목 5', image: 'book1.png' },
    { id: 6, title: '동화 제목 6', image: 'book1.png' },
    { id: 7, title: '동화 제목 7', image: 'book1.png' },
    { id: 8, title: '동화 제목 8', image: 'book1.png' },
  ];

  return (
    <PopularBookStyle.Container>
      <PopularBookStyle.Header>인기 동화</PopularBookStyle.Header>
      <Navbar />
      {/* 상단 메뉴 */}
      <PopularBookStyle.MenuContainer>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('전체')} selected={selectedMenu === '전체'}>전체</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('과학동화')} selected={selectedMenu === '과학동화'}>과학동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('전래동화')} selected={selectedMenu === '전래동화'}>전래동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('학습동화')} selected={selectedMenu === '학습동화'}>학습동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('수학동화')} selected={selectedMenu === '수학동화'}>수학동화</PopularBookStyle.MenuButton>
        <PopularBookStyle.MenuButton onClick={() => setSelectedMenu('판타지동화')} selected={selectedMenu === '판타지동화'}>판타지동화</PopularBookStyle.MenuButton>
      </PopularBookStyle.MenuContainer>

      {/* 필터링 박스 */}
      <PopularBookStyle.FilterContainer>
        <PopularBookStyle.FilterSelect value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value="별점 높은순">별점 높은순</option>
          <option value="최신 등록순">최신 등록순</option>
        </PopularBookStyle.FilterSelect>
      </PopularBookStyle.FilterContainer>

      {/* 책 목록 */}
      <PopularBookStyle.BookList>
        {books.map(book => (
          <PopularBookStyle.BookItem key={book.id}>
            <a href={`/book/${book.id}`}>
            <img src={`src/assets/images/book1.png`} alt={book.title} /></a>
            <PopularBookStyle.BookTitle>
              <a href={`/book/${book.id}`}>{book.title}</a>
            </PopularBookStyle.BookTitle>
          </PopularBookStyle.BookItem>
        ))}
      </PopularBookStyle.BookList>
    </PopularBookStyle.Container>
  );
};

export default PopluarBook;
