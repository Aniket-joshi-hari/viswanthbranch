import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { getProductDetails, addProductToCart } from './ApiHandlers/Api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      tags: [],
    };
  }

  addToCart = async e => {
    const response = await addProductToCart(this.state.productId);
    if (response.success == true) {
      alert('book added to cart');
    } else alert('failed to add to cart', e);
  };

  componentDidMount = async e => {
    const productId = this.props.location.state.productId;
    this.setState({
      productId,
    });
    const response = await getProductDetails(productId);
    if (response.success == true) {
      this.setState({
        tags: response.data.tags,
        productName: response.data.productName,
        authorName: response.data.authorName,
        publisherName: response.data.publisherName,
        bookSummary: response.data.bookSummary,
        imageURL: response.data.imageURL,
        pages: response.data.pages,
        readingDuration: response.data.readingDuration,
        quantity: response.data.quantity,
      });
    } else console.log('product details - productId not found',response);
  };

  render() {
    console.log('product details')
    return (
      <div
        style={{
          marginTop: '85px',
          width: '100vw',
          height: 'auto',
          background: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginLeft: '100px',
            marginRight: '60px',
            background: 'white',
          }}
        >
          <div style={{ width: '230px', height: '330px', margin: '60px' }}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={this.state.imageURL}
              alt={this.state.productName}
            />
          </div>
          <div style={{ margin: '60px' }}>
            <div style={{ lineHeight: 1, marginBottom: '30px' }}>
              <h1>{this.state.productName}</h1>
              <h4>
                By:
                {this.state.authorName}
              </h4>
            </div>
            <div style={{ display: 'flex' }}>
              {this.state.tags.map(tile => (
                <Paper
                  style={{
                    width: '100px',
                    height: '25px',
                    overflow: 'hidden',
                    textAlign: 'center',
                    background: '#F5F5F6',
                    marginRight: '20px',
                    fontWeight: 500,
                    fontSize: 'medium',
                  }}
                  elevation={0}
                >
                  <p>{tile}</p>
                </Paper>
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <p style={{ fontSize: 'small', fontWeight: 600 }}>In stock:</p>
              <p style={{ marginRight: '20px', fontSize: 'small' }}>
                {this.state.quantity}
              </p>
              <p style={{ fontSize: 'small', fontWeight: 600 }}>Pages:</p>
              <p style={{ marginRight: '20px', fontSize: 'small' }}>
                {this.state.pages}
              </p>
              <p style={{ fontSize: 'small', fontWeight: 600 }}>Read:</p>
              <p style={{ marginRight: '20px', fontSize: 'small' }}>
                {this.state.readingDuration}
              </p>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addToCart}
              >
                <ShoppingCartIcon />
                Add To Cart
              </Button>
              <Button
                style={{ marginLeft: '35px' }}
                variant="contained"
                color="primary"
              >
                <GroupAddIcon />
                Add To Group
              </Button>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '160px', background: 'white' }}>
          <h2>Summary</h2>
          <p
            style={{
              width: '75%',
              fontSize: '15px',
              textShadow: '0 0 1px transparent',
              lineHeight: '24px',
              color: '#333',
            }}
          >
            {this.state.bookSummary}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
