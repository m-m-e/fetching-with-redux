import React, { Component } from 'react';
import { connect } from "react-redux";
import { PhotoCard } from '../photoCard/PhotoCard';
import { fetchPhotos } from '../../redux/photosFetch';
import './photoList.scss';

class connectedPhotoList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPhotos());
  }
  render(){
    const { error, loading, products } = this.props;
    // const { photoData, currentPage, maxPerPage, order } = this.props;
    // const indexOfLastPhoto = currentPage * maxPerPage;
    // const indexOfFirstPhoto = indexOfLastPhoto - maxPerPage;
    // const currentPhotos = photoData.slice(indexOfFirstPhoto, indexOfLastPhoto);
  
    // const renderPhotos = () => {
    //   if (order === 'ascending'){
    //     const renderedPhotos = currentPhotos.map((photo, index) => <PhotoCard key={index} photo={photo}/>);
    //     return renderedPhotos;
    //   } else {
    //     const reversedPhotos = currentPhotos.reverse();
    //     const renderedPhotos = reversedPhotos.map((photo, index) => {
    //     return <PhotoCard key={index} photo={photo}/>
    //     });
    //     return renderedPhotos;
    //   };
    // };
  
    // const photosToRender = renderPhotos();

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="photo__list__container container">
        <ul className="photo__list row">
          Hello
          {/* {photoData && photosToRender} */}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { 
    photoData: state.photoData,
    loading: state.isFetching,
    error: state.error }
};

const PhotoList = connect(mapStateToProps)(connectedPhotoList);

export {PhotoList};