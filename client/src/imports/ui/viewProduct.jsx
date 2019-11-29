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
  width: '600px',
  height: '600px',
}



class ViewProduct extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  async componentDidMount() {
    this.setState({
      product: this.props.location.state.product
    })
  }

  renderProduct() {
      return (
        <div className="col-md" style={divStyle}>
          <Card className="col-md" style={divStyle}>
            {this.state.product.image? <img style={img} src={this.state.product.image.url} /> : <img style={img} src="http://www.kovairealestateservices.com/uploads/thumbs/noimage.jpg" alt="No Image" />}
            <CardBody>
              <CardTitle>{this.state.product.name}</CardTitle>
              <CardSubtitle>${this.state.product.product_price} + Tax</CardSubtitle>
              <CardText>{this.state.product.description}</CardText>
              <div className="row">
                <div className="col-md"><Button>Add To Cart</Button></div>
              </div>
            </CardBody>
          </Card>
        </div>
      )
  }

  render() {

    if(!this.state.product){
      return <div>Loading</div>
    }

    return (
      <div  className="container">
        {this.renderProduct()}
      </div>
    )

  }
}

export default ViewProduct