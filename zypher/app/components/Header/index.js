/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import Signin from '../../containers/Signin';
import Banner from './Banner';
import Search from '../../containers/Search';
import { IconButton, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '90px',
  },
  grow: {
    flexGrow: 1,
  },
  mobileMenuButton: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      marginLeft: -12,
      marginRight: 0
    }
  },
  banner: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      marginLeft: 0
    }
  },
  navBar: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      fontWeight: '500',
      fontSize: '14px',
      letterSpacing: '0.3px',
      color: '#282C3F',
      font: 'bold',
      textDecoration: 'none',
      textTransform: 'uppercase',
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  mobileMenuHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
})

class Header extends React.Component {

  state = {
    open: false,
  };

  handleMobileMenuOpen = () => {
    (this.state.open) ? this.setState({ open: false }) : this.setState({ open: true }) ;
    console.log(this.state.open);
  };


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return(
      <div className={classes.root} >
        <CssBaseline />
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <div className={classes.sectionMobile} >
              <IconButton 
                aria-label="Open drawer" 
                onClick={this.handleMobileMenuOpen} 
                color="inherit"
                className={classNames(classes.mobileMenuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <IconButton component={Link} to="/" className={classes.banner} >
              <Banner />
            </IconButton>
            <MenuList className={classes.navBar}>
              <MenuItem component={Link} to="/fiction" >
                Fiction
              </MenuItem>
              <MenuItem component={Link} to="/non-fiction" >
                Non Fiction
              </MenuItem>
              <MenuItem component={Link} to="/explore" >
                Explore
              </MenuItem>
              <MenuItem component={Link} to="/club" >
                Club
              </MenuItem>
              <MenuItem component={Link} to="/plans" >
                Plans
              </MenuItem>
            </MenuList>
            <div className={classes.grow} />
            {/* Search */}
            <div className={classes.sectionDesktop}>
              <Search />
              <Signin />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.mobileMenuHeader}>
            <IconButton onClick={this.handleMobileMenuOpen}>
              <ChevronLeftIcon  /> 
            </IconButton>
          </div>
          <Divider />
            <MenuList >
            <MenuItem component={Link} to="/fiction" >
                Fiction
              </MenuItem>
              <MenuItem component={Link} to="/non-fiction" >
                Non Fiction
              </MenuItem>
              <MenuItem component={Link} to="/explore" >
                Explore
              </MenuItem>
              <MenuItem component={Link} to="/club" >
                Club
              </MenuItem>
              <MenuItem component={Link} to="/plans" >
                Plans
              </MenuItem>>
            </MenuList>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);