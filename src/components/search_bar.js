import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// }

// class-based component
class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          value={this.state.term} />
      </div>
    );
  }

  handleInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }
}

export default SearchBar;
