import React from 'react';

const PhotoCard = props => {
  const { photo } = props;
  return (
    <li className="photo__card">
      <img 
        className="photo__thumbnail" 
        src={photo.thumbnailUrl} 
        alt={photo.title}
      />
      <p className="photo__title">{photo.title}</p>
    </li>
  );
};

export { PhotoCard };