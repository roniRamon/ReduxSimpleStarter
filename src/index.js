import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

const API_KEY = 'AIzaSyDyvvvqh5e7P6WxaOL-U3YG1Ww1dpd9Kks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboard'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo =>  this.setState({ selectedVideo }) }
          videos={this.state.videos}
          />
     </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
