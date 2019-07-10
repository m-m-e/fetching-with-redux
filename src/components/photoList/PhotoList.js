import React from 'react';
import { PhotoCard } from '../photoCard/PhotoCard';
import './photoList.scss';

const PhotoList = props => {
  const { photoData, currentPage, maxPerPage, order } = props;
  const indexOfLastPhoto = currentPage * maxPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - maxPerPage;
  const currentPhotos = photoData.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const renderPhotos = () => {
    if (order === 'ascending'){
      const renderedPhotos = currentPhotos.map((photo, index) => <PhotoCard key={index} photo={photo}/>);
      return renderedPhotos;
    } else {
      const reversedPhotos = currentPhotos.reverse();
      const renderedPhotos = reversedPhotos.map((photo, index) => {
      return <PhotoCard key={index} photo={photo}/>
      });
      return renderedPhotos;
    };
  };

  const photosToRender = renderPhotos();
  
  return (
    <div className="photo__list__container container">
      <ul className="photo__list row">
        {photoData && photosToRender}
      </ul>
    </div>
  );
};

export {PhotoList};