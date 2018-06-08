import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDyvvvqh5e7P6WxaOL-U3YG1Ww1dpd9Kks';

const App = () => (
    <div>
      <SearchBar />
   </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
