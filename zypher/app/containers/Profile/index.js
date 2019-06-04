import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectUid
} from '../App/selectors';

import AccountDetails from './AccountDetails';
import Addresses from './Addresses';
import Payments from './Payments';
import Orders from './Orders';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 0,
    marginTop: 20,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const modulesList = [
  { text: 'Account Details', component: AccountDetails },
  { text: 'Addresses', component: Addresses },
  { text: 'Orders', component: Orders },
  { text: 'Payments', component: Payments },
];

class Profile extends Component {
  state = {
    currentPage: 0,
  };

  onChange = i => () => {
    this.setState({
      currentPage: i,
    });
  };

  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    const CurrentModule = modulesList[currentPage].component;
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          {/* <Divider /> */}
          <List>
            {modulesList.map(({ text }, idx) => (
              <ListItem button key={text} onClick={this.onChange(idx)}>
                <ListItemIcon>
                  {idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <CurrentModule />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uid: makeSelectUid(),
});

function mapDispatchToProps(dispatch) {
  return {}
}  

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withStyles(styles)( compose(withConnect)(Profile) );
