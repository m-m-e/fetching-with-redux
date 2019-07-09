import React from 'react';
import { PhotoList } from '../photoList/PhotoList';
import { PageNav } from '../pageNav/PageNav';
import { SortButton } from '../sortButton/SortButton';

const Home = props => {
  const { order, photoData, currentPage, maxPerPage, choosePage, goToPage, changePhotoOrder } = props;
  return (
    <div className="home">
      <SortButton
        order={order}
        changePhotoOrder={changePhotoOrder}
      />
      <PhotoList
        order={order}
        photoData={photoData}
        currentPage={currentPage}
        maxPerPage={maxPerPage}
      />
      <PageNav 
        photoData={photoData}
        currentPage={currentPage}
        choosePage={choosePage}
        maxPerPage={maxPerPage}
        goToPage={goToPage}
      />
    </div>
  )
};

export { Home };