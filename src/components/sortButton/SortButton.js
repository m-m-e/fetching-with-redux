import React from 'react';
import './sortButton.scss';

const SortButton = () => {
  return (
    <div className="sort__button__container">
      <button className="sort__button" type="button">Title &#8595;</button>
    </div>
  );
};

export { SortButton };