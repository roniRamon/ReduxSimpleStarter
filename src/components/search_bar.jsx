import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div>
        Search: <input onChange={this.onInputChange.bind(this)}/>
        <p>Value of Input: {this.state.term}</p>
      </div>
    );
  }

}


export default SearchBar;
