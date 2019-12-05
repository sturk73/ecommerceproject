import React, { Component, useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardTitle
} from 'reactstrap/lib';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardText from 'reactstrap/lib/CardText';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Pagination from './pagination.jsx'
import Search from './search'


const divStyle = {
  margin: '0 0 0 8',
}

const img = {
  width: '300px',
  height: '300px',
}

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      shoppingCart: [],
      currentPage : 1,
      searchString: ""
    }
  }

  async componentDidMount() {


    const shoppingCart = sessionStorage.getItem("ShoppingCart")
    if(sessionStorage.getItem("ShoppingCart") !== null){
      this.setState({
        shoppingCart : JSON.parse(shoppingCart)
      })
    }

    const productResponse = await window.fetch('/api/products')
    const products = await productResponse.json()

    const categoriesResponse = await window.fetch('api/categories')
    const categories = await categoriesResponse.json()
    this.setState({
      products,
      categories,
      filteredProducts: products
    })
  }

  onClickLinkHandler = (product) => (e) => {
    e.preventDefault();
    console.log(product)
    this.props.history.push('/view-product', { product });
  }

  addToCart = (product) => (e) => {
    const cartItem = product

    const shoppingCart = this.state.shoppingCart

    if(shoppingCart.includes(product)){
      cartItem.quantityInCart += 1
    }
    else{
      cartItem.quantityInCart = 1
      shoppingCart.push(cartItem)
    }

    this.setState({
      shoppingCart
    })

    sessionStorage.setItem("ShoppingCart", JSON.stringify(this.state.shoppingCart))
  }

  paginate = (currentPage) => {
    this.setState({
      currentPage
    })
  }

  handleChange = (searchString) => {
    this.setState({
      searchString
    })
  }

  renderCategories() {

    const toggle = () => {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      })
    };

    const categories = this.state.categories.map((category) => {
      return (
        <DropdownItem key={category.id} onClick={this.setCategory(category)}>{category.name}</DropdownItem>
      )
    })

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.setCategory("All")}>All</DropdownItem>
          {categories}
        </DropdownMenu>
      </Dropdown>
    )
  }

  setCategory = (category) => (e) => {
    if (category === "All") {
      this.setState({
        selectedCategory: "All",
        filteredProducts: this.state.products
      })
    }
    else {
      const products = this.state.products.filter((product) => { return product.category_id === category.id })

      this.setState({
        selectedCategory: category.name,
        filteredProducts: products
      })
    }

  }

  renderProducts() {

    let products = this.state.filteredProducts

    if(this.state.searchString !== "")
    {
      console.log("Test")
      products = products.filter((product) => {console.log(product.name.toUpperCase()); console.log(this.state.searchString.toUpperCase()); return (product.name.toUpperCase().includes(this.state.searchString.toUpperCase()) || product.description.toUpperCase().includes(this.state.searchString.toUpperCase()))})
    }
    console.log(products)

    let lastProductIndex = this.state.currentPage * 9

    let firstPostIndex = lastProductIndex - 9

    let currentProducts = products.slice(firstPostIndex, lastProductIndex)

    const product = currentProducts.map((product) => {
      return (
        <div className="col-md-4" style={divStyle} key={product.id}>
          <Card className="col-md" style={divStyle}>
            {product.image ? <img style={img} src={product.image.url} /> : <img src="http://www.kovairealestateservices.com/uploads/thumbs/noimage.jpg" alt="No Image" />}
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardSubtitle>${product.product_price} + Tax</CardSubtitle>
              <div className="row">
                <div className="col-md"><Button onClick={this.onClickLinkHandler(product)}>More Info</Button></div>
                <div className="col-md"><Button onClick={this.addToCart(product)}>Add To Cart</Button></div>
              </div>

            </CardBody>
          </Card>
        </div>
      )
    })

    return (
      <div className="row" style={divStyle}>
        {product}
      </div>
    )
  }

  toggle = () => this.state.dropdownOpen(prevState => !prevState);

  render() {

    if (!this.state.products || !this.state.categories) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {this.renderCategories()}
          </div>
          <div className="col-md-9">
            <Search handleChange={this.handleChange}/>
          </div>
        </div>
        <div>
          <Pagination productsPerPage="9" totalProducts={this.state.products.length} paginate={ this.paginate} />
          {this.renderProducts()}
        </div>

      </div>
    )

  }
}

export default IndexPage