import React from 'react';
import { Link } from '@reach/router';
import './photo.scss';

const Photo = props => {
  const { id, photoData } = props;

  const findPhoto = () => {
    const chosenPhoto = photoData.filter(item => item.id === parseInt(id));
    if (chosenPhoto.length > 0){
      return chosenPhoto;
    }
  }

  const chosenPhoto = findPhoto();

  return (
    <div className="photo__container">
      {chosenPhoto && 
        <div className="photo">
          <p className="photo__title">{chosenPhoto[0].title}</p>
          <img
            className="photo__image"
            src={chosenPhoto[0].url}
            alt={chosenPhoto[0].id}
          />
        </div>
      }
    <Link to="/" className="list__link">Back to list</Link>
    </div>
  )
}

export { Photo };