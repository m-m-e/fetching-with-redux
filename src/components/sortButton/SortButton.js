import React from 'react';
import './sortButton.scss';

const SortButton = props => {
  const { changePhotoOrder, order } = props;

  return (
    <div className="sort__button__container">
      {order === 'ascending'
        ?
        <button
          id={order}
          className="sort__button"
          type="button"
          onClick={changePhotoOrder}
        >
          Title &#8595;
        </button>
        :
        <button
          id={order}
          className="sort__button"
          type="button"
          onClick={changePhotoOrder}
        >
          Title &#8593;
        </button>
      }
    </div>
  );
};

export { SortButton };