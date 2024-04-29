import React, { useState, useEffect } from 'react';
import * as SearchStyle from './SearchStyle';
import Navbar from '../Navbar/Navbar';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBy, setFilterBy] = useState<'title' | 'author'>();
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);
  const [showDefaultList, setShowDefaultList] = useState<boolean>(true);


  // 동화 목록 데이터 받아오기 등의 로직 생략
  const books = [
    { id: 1, title: '동화 제목 1', author: '작가 1', image: 'book1.png' },
    { id: 2, title: '동화 제목 2', author: '작가 1', image: 'book2.png' },
    { id: 3, title: '동화 제목 3', author: '작가 1', image: 'book1.png' },
    { id: 4, title: '동화 제목 4', author: '작가 4', image: 'book1.png' },
    { id: 5, title: '동화 제목 5', author: '작가 5', image: 'book1.png' },
    { id: 6, title: '동화 제목 6', author: '작가 6', image: 'book1.png' },
    { id: 7, title: '동화 제목 7', author: '작가 7', image: 'book1.png' },
    { id: 8, title: '동화 제목 8', author: '작가 8', image: 'book1.png' },
  ];

  // 검색 함수
  const handleSearch = () => {
    const results = filterBooks();
    setSearchResults(results);
    setShowNoResults(results.length === 0);
    setShowDefaultList(false);
  };

  // 검색어를 받아 책 목록을 필터링하는 함수
  const filterBooks = () => {
    if (searchQuery) {
      if (filterBy === 'title') {
        return books.filter(book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (filterBy === 'author') {
        return books.filter(book =>
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    } else {
      // 검색어가 없는 경우에는 모든 동화를 보여줍니다.
      setShowDefaultList(true);
      return books;
    }
    return [];
  };

  // 엔터 키를 눌렀을 때 검색 함수 호출
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchStyle.Container>
      <SearchStyle.Header>동화 검색</SearchStyle.Header>
      <Navbar />
      {/* 검색 입력 폼 */}
      <SearchStyle.SearchForm onSubmit={(e) => { e.preventDefault(); }}>
        <SearchStyle.FilterSelect value={filterBy} onChange={(e) => setFilterBy(e.target.value as 'title' | 'author')}>
          <option value="">선택</option>
          <option value="title">동화 제목</option>
          <option value="author">작가명</option>
        </SearchStyle.FilterSelect>
        <SearchStyle.SearchInput
          type="text"
          placeholder={`검색어를 입력하세요`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SearchStyle.SearchButton type="button" onClick={handleSearch}>검색</SearchStyle.SearchButton>
      </SearchStyle.SearchForm>

      {/* 검색 결과 목록 */}
      {(searchResults.length > 0 || showDefaultList) && (
        <SearchStyle.BookList>
          {(searchResults.length > 0 ? searchResults : books).map(book => (
            <SearchStyle.BookItem key={book.id}>
              <a href={`/book/${book.id}`}>
                <img src={`src/assets/images/${book.image}`} alt={book.title} />
              </a>
              <SearchStyle.BookTitle>
                <a href={`/book/${book.id}`}>{book.title}</a>
              </SearchStyle.BookTitle>
              <SearchStyle.BookAuthor>{book.author}</SearchStyle.BookAuthor>
            </SearchStyle.BookItem>
          ))}
        </SearchStyle.BookList>
      )}

      {showNoResults && (
        <SearchStyle.NoResultsText>일치하는 결과가 없습니다.</SearchStyle.NoResultsText>
      )}
    </SearchStyle.Container>
  );
};

export default Search;
