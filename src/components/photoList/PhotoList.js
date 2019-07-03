import React from 'react';
import { PhotoCard } from '../photoCard/PhotoCard';

const PhotoList = props => {
  return (
    <div className="photo__list__container">
      <ul className="photo__list">
        <PhotoCard />
      </ul>
    </div>
  );
};

export {PhotoList};