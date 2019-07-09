import React, { Component } from 'react';
import { Home } from '../home/Home';
import { Photo } from '../photo/Photo';
import { fetchPhotos } from '../../services/fetchPhotos';
import { Router } from '@reach/router';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      photoData: {},
      order: 'ascending',
      currentPage: 2,
      maxPerPage: 6
    }
    this.getPhotos = this.getPhotos.bind(this);
    this.choosePage = this.choosePage.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.changePhotoOrder = this.changePhotoOrder.bind(this);
  }

  componentDidMount(){
    this.getPhotos();
  }

  sortPhotos(data){
    const sortedPhotos = {};
    data && data.forEach(photo => {
      sortedPhotos[photo.albumId] = {
        id: photo.id,
        title: photo.title,
        url: photo.url,
        thumbnailUrl: photo.thumbnailUrl
      } 
    });
    return sortedPhotos;
  }

  getPhotos(){
    const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc';
    return fetchPhotos(ENDPOINT)
      .then(data => {
        const sortedPhotos = this.sortPhotos(data);
        this.setState({photoData: sortedPhotos});
      });
  }

  choosePage(event){
    const chosenPage = parseInt(event.currentTarget.value);
    this.setState({currentPage: chosenPage});
  }

  goToPage(event){
    const { photoData, currentPage, maxPerPage } = this.state;
    const arrow = event.currentTarget.id;
    const totalPages = Math.ceil(Object.values(photoData).length / maxPerPage);

    if (arrow === 'back' && currentPage > 1){
      this.setState(prevState => {
        const newPage = prevState.currentPage - 1;
        return {currentPage: newPage};
      });
    } else if (arrow === 'forward' && currentPage < totalPages){
        this.setState(prevState => {
        const newPage = prevState.currentPage + 1;
        return {currentPage: newPage};
      });
    }
  }

  changePhotoOrder(){
    const currentOrder = this.state.order;
    if (currentOrder === 'ascending'){
      this.setState({order: 'descending'});
    } else {
      this.setState({order: 'ascending'});
    }
  }

  render(){
    const { photoData, currentPage, maxPerPage, order } = this.state;
    const { choosePage, goToPage, changePhotoOrder } = this;
    const photoDataArray = Object.values(photoData);

    return (
      <div className="App">
        <Router>
          <Home
            path="/"
            order={order}
            photoData={photoDataArray}
            currentPage={currentPage}
            maxPerPage={maxPerPage}
            choosePage={choosePage}
            goToPage={goToPage}
            changePhotoOrder={changePhotoOrder}
          />
          <Photo 
            path="/photos/:id"
            photoData={photoDataArray}
          />
        </Router>
      </div>
    );
  };
};

export default App;
