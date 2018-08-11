import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchBarTerm: ''
    }
    this.goSearch = this.goSearch.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  goSearch () {
    this.props.onSearch(this.state.searchBarTerm);
  }

  handleTermChange (event) {
    this.setState({searchBarTerm: event.target.value});
  }

  render () {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.goSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
