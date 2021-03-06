import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="   Search"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    );
  }

}


export default SearchBar;
