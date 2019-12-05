import React, { Component } from 'react';
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


const divStyle = {
  margin: '0 0 0 8',
}

const img = {
  width: '300px',
  height: '300px',
}

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: []
    }
  }

  async componentDidMount() {


    const shoppingCart = sessionStorage.getItem("ShoppingCart")
    if(sessionStorage.getItem("ShoppingCart") !== null){
      this.setState({
        shoppingCart : JSON.parse(shoppingCart),
        emptyCart : false,
        ready: true
      })
    }
    else{
      this.setState({
        emptyCart : true,
        ready: true
      })
    }
  }

  removeFromCart = (product) => (e) => {
    const productToRemove= product

    let shoppingCart = this.state.shoppingCart

    shoppingCart = shoppingCart.filter((cartItem) => {return cartItem.id !== productToRemove.id})

    this.setState({
      shoppingCart
    })

    if (shoppingCart.length === 0)
    {
      sessionStorage.removeItem("ShoppingCart")
    }
    else
    {
      sessionStorage.setItem("ShoppingCart", JSON.stringify(this.state.shoppingCart))
    }

  }

  updateQuantity = (product) => (e) => {
    let shoppingCart = this.state.shoppingCart

    console.log(e.target.value)

    if(e.target.value == 0){
      console.log("test")

      shoppingCart = shoppingCart.filter((cartItem) => {return cartItem.id !== product.id})
    }
    else{
      let productIndex = shoppingCart.findIndex((obj => obj.id == product.id));

      shoppingCart[productIndex].quantityInCart = e.target.value
    }

    this.setState({
      shoppingCart
    })

    if (shoppingCart.length === 0)
    {
      sessionStorage.removeItem("ShoppingCart")
    }
    else
    {
      sessionStorage.setItem("ShoppingCart", JSON.stringify(this.state.shoppingCart))
    }

  }

  renderCartItems() {
    const product = this.state.shoppingCart.map((product) => {
      return (
        <div className="col-md-4" style={divStyle} key={product.id}>
          <div className="col-md" style={divStyle}>
            <div>
              <div>{product.name}</div>
              <div>${product.product_price} + Tax</div>
              <input type="number" onChange={this.updateQuantity(product)} value={product.quantityInCart}/>
              <div className="row">
                <div className="col-md"><Button onClick={this.removeFromCart(product)}>Remove</Button></div>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="row" style={divStyle}>
        {product}
      </div>
    )
  }

  render() {

    if (!this.state.ready) {
      return <div>Loading</div>
    }

    return (
      <div className="container">
        <div>
          {this.renderCartItems()}
        </div>

      </div>
    )

  }
}

export default ShoppingCart