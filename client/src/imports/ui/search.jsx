import React, { Component } from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
    });
    this.refs.search.focus();
  }

  handleChange() {

    this.setState({
      searchString : this.refs.search.value
    })

    this.props.handleChange(this.refs.search.value)
  }

  render() {
    let search = this.state.searchString.trim().toLowerCase();

    return (
      <div>
        <h3>Search For Products</h3>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Search