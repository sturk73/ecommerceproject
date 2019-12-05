import React, { Component } from 'react';

class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      productsPerPage: 9,
      pageNumbers: []
    }
  }

  componentDidMount() {
    this.setState({
      totalProducts: this.props.totalProducts
    })
  }

  paginate = (number) => (e) => {
    this.props.paginate(number)
  }

  renderPageNumbers(){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(this.state.totalProducts / this.state.productsPerPage); i++) {
      pageNumbers.push(i)
    }

    return (
      <div>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a href="#" className="page-link" onClick={this.paginate(number)}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return this.renderPageNumbers()
  }
}

export default Pagination