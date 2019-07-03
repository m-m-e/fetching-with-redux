import React, { Component } from 'react';
import { PhotoList } from '../photoList/PhotoList';
import { SortButton } from '../sortButton/SortButton';
import { PageNav } from '../pageNav/PageNav';
import { fetchPhotos } from '../../services/fetchPhotos';
import '../../materialize-src/sass/materialize.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      photoData: {},
    view: 'ascending',
    currentPage: 1  
    }
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount(){
    this.getPhotos();
  }

  sortPhotos(data){
    const sortedPhotos = {};
    data.forEach(photo => {
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

  render(){
    const { photoData } = this.state;
    return (
      <div className="App">
        <SortButton />
        <PhotoList photoData={photoData}/>
        <PageNav />
      </div>
    );
  };
};

export default App;
