import React from 'react';
import { PhotoList } from '../photoList/PhotoList';
import { SortButton } from '../sortButton/SortButton';
import { PageNav } from '../pageNav/PageNav';

const App = () => {
  return (
    <div className="App">
      <SortButton />
      <PhotoList />
      <PageNav />
    </div>
  );
};

export default App;
