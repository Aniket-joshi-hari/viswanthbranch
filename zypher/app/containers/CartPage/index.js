/**** CartPage ****/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectBooks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getCartList, removeCartItem } from './actions';
import Dragula from 'dragula';
import 'dragula/dist/dragula.min.css';
import ListIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import DialogComponent from '../../components/DialogComponent';


function Transition(props) {
  return <Slide direction="left" {...props} />;
}

const styles = theme => ({
 image: {
   height: 150,
   width: 120
 },
 scrollItem: {
   display: 'flex'
 },
 listIcon: {
   alignSelf: 'center',
   margin: 10,
 },
 descContainer: {
   padding: 10,
   width: 200
 },
 imageContainer: {
   padding: 10
 },
 closeCart: {
   alignSelf: 'flex-end'
 },
 paperStyle: {
   paddingLeft: 35,
   paddingBottom: 20,
 },
 cartList: {
   height: '100%',
 },
 removeButton: {
   alignSelf: 'center',
   margin: 10,
 },
 fade: {
   opacity: '0.3'
 }
})

/* eslint-disable react/prefer-stateless-function */
export class CartPage extends React.Component {
  state = {
    open: false,
  };

  toggleDialog = () => {
    this.setState(({ open }) => {
      if(!open){
        console.log('fetch cart');
        this.props.fetchCart();
      }
      return {open: !open};
    });
  };

  componentDidMount() {
    this.props.fetchCart();
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  render() {
    const { classes } = this.props;
    const {open} = this.state;
    const cartLength = this.props.books.length;
    return ( 
      <>
        <IconButton color="inherit" aria-label="cart" onClick={this.toggleDialog} >
          <ShoppingCartIcon />
        </IconButton>
        <DialogComponent
          TransitionComponent={Transition} //
          open={open}
          title={`Your Cart ${!cartLength ? 'is Empty' : ''}`}
          onClose={this.toggleDialog}
          style={{dialogTitle: {borderBottomWidth: '0px'}}}
          render={() => (
            <>
            {cartLength ?
            (<Paper className={classes.paperStyle} elevation={0}>
              <Typography component="p">
                  {cartLength >= 3 ? 3 : cartLength}
                  {cartLength > 3 ? `/${cartLength}` : null}&nbsp;
                  {`${cartLength > 1 ? 'Books' : 'Book'}`} Ready To Be Shipped.
              </Typography>
                <Typography component="p">
                  Drag To Rearrange Cart.
              </Typography>
            </Paper>) : null}
            <Divider />
            <Grid item xs={12} sm={12} md={16} >
              <div className={classes.cartList} ref={this.dragulaDecorator}>
                {cartLength ? this.props.books.map((item, i) => (
                  <div key={item.book._id} className={i >= 3 ? classes.fade : null}>
                    <div className={classes.scrollItem} >
                      <ListIcon className={classes.listIcon} />
                      <div className={classes.imageContainer} >
                        <div key={item.book.productName} className={classes.imageWrapper} >
                          <img
                            src={item.book.imageURL}
                            alt={item.book.productName}
                            className={classes.image}
                          />
                        </div>
                      </div>
                      <div className={classes.descContainer}>
                        <Typography
                          component="h6"
                          className={classes.ListItemTitle}
                          gutterBottom
                        >
                          {item.book.productName}
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          className={classes.listItemDescription}
                          gutterBottom
                        >
                          {item.book.authorName}
                        </Typography>
                      </div>
                      <Fab size="medium" className={classes.removeButton} color="primary"
                       aria-label="Remove From Cart" 
                       onClick={() => this.props.removeItem(item.book._id)}>
                        <ClearIcon />
                      </Fab>
                    </div>
                    <Divider />
                  </div>
                )) : null}
              </div>
            </Grid>
            </>
          )}
        />
      </>
    );
  }
}

CartPage.propTypes = {
  books: PropTypes.array,
  removeItem: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  books: makeSelectBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCart: () => dispatch(getCartList()),
    removeItem: (pid) => dispatch(removeCartItem(pid)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cartPage', reducer });
const withSaga = injectSaga({ key: 'cartPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(CartPage);
