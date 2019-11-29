import React, {Component} from 'react';

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

  render() {

    if(!this.state.data){
      return <div>Loading</div>
    }

    return this.state.data.map((product) => {
      return (
        <div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.product_price}</div>
          <img src={product.image.url}/>
      </div>

      )
    })
  }
}

export default IndexPage