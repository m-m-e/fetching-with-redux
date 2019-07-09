import React from 'react';
import { PhotoCard } from '../photoCard/PhotoCard';
import './photoList.scss';

const PhotoList = props => {
  const { photoData, currentPage, maxPerPage } = props;
  const indexOfLastPhoto = currentPage * maxPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - maxPerPage;
  const currentPhotos = photoData.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const renderPhotos = currentPhotos.map((photo, index) => {
    return <PhotoCard key={index} photo={photo}/>;
  });
  
  return (
    <div className="photo__list__container container">
      <ul className="photo__list row">
        {photoData && renderPhotos}
      </ul>
    </div>
  );
};

export {PhotoList};