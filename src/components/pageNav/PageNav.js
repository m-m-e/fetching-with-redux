import React from 'react';
import './pageNav.scss';

const PageNav = props => {
  const { photoData, currentPage, choosePage, maxPerPage, goToPage } = props;

  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(photoData.length / maxPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={currentPage === number ? "nav__list-item current" : "nav__list-item"}
          key={number}
          value={number}
          onClick={choosePage}
        >
          {number}
        </li>
      );
    });

  return (
    <nav className="page__nav">
      <ul className="nav__list">
        <li className="nav__list-item" id="back" onClick={goToPage}>&#9664;</li>
        {renderPageNumbers}
        <li className="nav__list-item" id="forward" onClick={goToPage}>&#9654;</li>
      </ul>
    </nav>
  );
};

export { PageNav };