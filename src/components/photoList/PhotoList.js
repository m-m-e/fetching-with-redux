import React from 'react';
import { PhotoCard } from '../photoCard/PhotoCard';

const PhotoList = props => {
  const { photoData } = props;
  return (
    <div className="photo__list__container">
      <ul className="photo__list">
        {photoData && Object.values(photoData).map((item, index) => <PhotoCard photo={item} key={index}/>)}
      </ul>
    </div>
  );
};

export {PhotoList};