import React, {Component} from 'react';
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


const divStyle = {
  margin: '0 0 0 8',
}

const img = {
  width: '300px',
  height: '300px',
}

class IndexPage extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  async componentDidMount() {
    const response = await window.fetch('/api/products')
    const data = await response.json()
    this.setState({
      data
    })
  }

  onClickLinkHandler = (product)=> (e)=> {
    e.preventDefault();
    console.log(product)
    this.props.history.push('/view-product', {product});
}

  renderProducts() {
    const product = this.state.data.map((product) => {
      return (
        <div className="col-md-4" style={divStyle}>
          <Card className="col-md" style={divStyle}>
            {product.image? <img style={img} src={product.image.url} /> : <img src="http://www.kovairealestateservices.com/uploads/thumbs/noimage.jpg" alt="No Image" />}
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardSubtitle>${product.product_price} + Tax</CardSubtitle>
              <div className="row">
                <div className="col-md"><Button onClick={this.onClickLinkHandler(product)}>More Info</Button></div>
                <div className="col-md"><Button>Add To Cart</Button></div>
              </div>

            </CardBody>
        </Card>
        </div>
      )})

      return (
        <div className="row" style={divStyle}>
          {product}
        </div>
      )
  }

  render() {

    if(!this.state.data){
      return <div>Loading</div>
    }

    return (
      <div  className="container">
        {this.renderProducts()}
      </div>
    )

  }
}

export default IndexPage