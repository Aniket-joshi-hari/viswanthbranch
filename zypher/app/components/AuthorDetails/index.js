import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { getAuthorDetails, getBookDetails } from './ApiHandlers/Api';

class AuthorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      authorBio: '',
      authorImageURL: '',
      authorId: '',
      booksId: [],
      books: [],
      raised: 0,
    };
  }

  componentDidMount = async e => {
    const responseAuthorDetails = await getAuthorDetails(this.props.location.state.authorId);
    if (responseAuthorDetails.success == true) {
      console.log(responseAuthorDetails);
      this.setState({
        authorName: responseAuthorDetails.data.author.name,
        authorBio: responseAuthorDetails.data.author.authorBio,
        authorImageURL: responseAuthorDetails.data.author.authorImage,
        authorId: responseAuthorDetails.data.author._id,
        booksId: responseAuthorDetails.data.books,
      });
    } else {
      console.log({ responseAuthorDetails });
    }

    const responseBookDetails = await getBookDetails();
    if (responseBookDetails.success == true) {
      this.setState({
        books: responseBookDetails.data,
      });
      console.log(this.state.books);
    }
  };

  render() {
    const authorDetailsContainer = {
      width: '100%',
      height: 'auto',
      position: 'relative',
      paddingTop: '30px',
      textAlign: 'center',
      marginBottom: '80px',
    };

    const authorImageContainer = {
      height: '220px',
      width: '220px',
      overflow: 'hidden',
      borderRadius: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    };

    const cardStyle = {
      height: '403px',
      width: '263px',
      overflow: 'hidden',
      borderRadius: 0,
    };

    const productImageContainer = {
      width: '162px',
      height: '230px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '16px',
    };

    const productDetailContainer = {
      color: '#000',
      marginLeft: '20px',
      marginRight: '20px',
      marginTop: '20px',
    };

    return (
      <div style={{ width: '100%', height: 'auto', background: 'white' }}>
        <div style={authorDetailsContainer}>
          <div style={authorImageContainer}>
            <img src={this.state.authorImageURL} alt={this.state.authorName} />
          </div>
          <h3>{this.state.authorName}</h3>
          <p>{this.state.authorBio}</p>
        </div>
        <GridList
          style={{ marginLeft: '10%' }}
          cols={4}
          spacing={0}
          cellHeight={400}
        >
          {this.state.books.map(tile => (
            <Card
              component={Link}
              to={{
                pathname: '/product-details',
                state: { productId: tile._id },
              }}
              style={cardStyle}
              raised={0}
            >
              <div style={productImageContainer}>
                <img
                  style={{ height: '100%', width: '100%' }}
                  src={tile.imageURL}
                  alt={tile.productName}
                />
              </div>
              <div style={productDetailContainer}>
                <h3>{tile.productName}</h3>
                <p>{tile.authorName}</p>
              </div>
            </Card>
          ))}
        </GridList>
      </div>
    );
  }
}

export default AuthorDetails;
