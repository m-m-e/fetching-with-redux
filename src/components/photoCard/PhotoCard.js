import React from 'react';
import './photoCard.scss';
import { Link } from '@reach/router';

const PhotoCard = props => {
  const { photo } = props;
  return (
    <li className="photo__card col-sm-6 col-md-4 col-lg-3">
      <Link to={`/photos/${photo.id}`} className="photo__link">
        <img 
          className="photo__thumbnail" 
          src={photo.thumbnailUrl} 
          alt={photo.title}
        />
      </Link>
      <p className="photo__title">{photo.title}</p>
    </li>
  );
};

export { PhotoCard };