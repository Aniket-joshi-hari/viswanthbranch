import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import CartPage from 'containers/CartPage';

const styles = theme => ({
  avatar: {
    margin: 10,
    cursor: 'pointer',
  },
  cartButton: {
    marginRight: '20px',
  }
})

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
        }
    }

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
    
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;
        return(
          <div style={{ display: 'flex'}}>
            <CartPage />
            <Grid container justify="center" alignItems="center">
              <Avatar alt={this.props.fullName}
                src={this.props.userImageURL}
                onClick={this.handleMenu}
                className={classes.avatar}
                style={{cursor: 'pointer'}}
              />
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.props.signOut}>logout</MenuItem>
                  <MenuItem component={Link} to="/my-books" onClick={this.handleClose}>My Books</MenuItem>
                  <MenuItem component={Link} to="/profile" onClick={this.handleClose}>Profile</MenuItem>
                </Menu>
            </Grid>
          </div>
        );
    }
}

export default LoggedIn;