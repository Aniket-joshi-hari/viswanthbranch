/**
 *
 * MyBooks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectCurrent, makeSelectUpcoming, makeSelectPast } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getMyBooks } from './actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid } from 'semantic-ui-react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  imageWrapper: {
    height: 150,
    width: 120,
    margin: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  listBooks: {
    display: 'flex',
  },
  current: {
    width: '60%'
  },
  paperStyle: {
    margin: 30
  },
  title: {
    padding: '10px 60px',
  },
  descContainer: {
    width: '100%'
  },
  listItemTitle: {
    paddingTop: 20
  },
  listItemDescription: {
    marginBottom: '12%',
    fontSize: 14,
    fontWeight: 400
  },
  additionalInfoTitle: {
    paddingLeft: 20,
    paddingBottom: 0
  },
  additionalInfoData: {
    paddingLeft: 20,
    paddingBottom: 20
  }
});


/* eslint-disable react/prefer-stateless-function */
export class MyBooks extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.fetchMyBooks();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { current, upcoming, past, classes } = this.props;
    const { value } = this.state;
    const currentDate = moment();
    return(
      <div className={classes.root}>
        <Paper className={classes.title} elevation={0}
          variant="h3" 
          component="h3"
        >
          My Books
        </Paper>
        <Paper elevation={0} color="secondary" position="static">
          <Tabs indicatorColor="primary"  value={value} onChange={this.handleChange}>
            <Tab label="Current" />
            <Tab label="Upcoming" />
            <Tab label="Past" />
          </Tabs>
        </Paper>
        {value === 0 &&
          <TabContainer>
            <Grid item xs={12} sm={12} md={16} >
              <div className={classes.current} >
                {current.map((item) => (
                  <Paper key={item.book.id} className={classes.paperStyle}  >
                    <div className={classes.listBooks}>
                      <div className={classes.imageContainer} >
                        <div key={item.book.productName} className={classes.imageWrapper} >
                          <img
                            src={item.book.imageURL}
                            alt={item.book.productName}
                            className={classes.image}
                          />
                        </div>
                      </div>
                      <div className={classes.descContainer} >
                        <Typography
                          variant="h5"
                          component="h5"
                          className={classes.listItemTitle}
                          gutterBottom
                        >
                          {item.book.productName}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          className={classes.listItemDescription}
                          gutterBottom
                        >
                          {item.book.authorName}
                        </Typography>
                        <Divider />                  
                      </div>
                     </div>
                     <Typography
                      variant="p"
                      component="p"
                      className={classes.additionalInfoTitle}
                      gutterBottom
                      >
                        Reading Since
                      </Typography>
                     <Typography
                        variant="h6"
                        component="h6"
                        className={classes.additionalInfoData}
                        gutterBottom
                      >
                        {moment().diff(item.addedAt, 'days')} Days
                      </Typography>
                  </Paper>
                ))}
              </div>
            </Grid>
          </TabContainer>
         }

        {value === 1 && 
          <TabContainer>
            <Grid item xs={12} sm={12} md={16} >
              <div className={classes.current} >
                {upcoming.map((item) => (
                  <Paper key={item.book.id} className={classes.paperStyle}   >
                    <div className={classes.listBooks}>
                      <div className={classes.imageContainer} >
                        <div key={item.book.productName} className={classes.imageWrapper} >
                          <img
                            src={item.book.imageURL}
                            alt={item.book.productName}
                            className={classes.image}
                          />
                        </div>
                      </div>
                      <div className={classes.descContainer} >
                        <Typography
                          variant="h5"
                          component="h5"
                          className={classes.listItemTitle}
                          gutterBottom
                        >
                          {item.book.productName}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          className={classes.listItemDescription}
                          gutterBottom
                        >
                          {item.book.authorName}
                        </Typography>
                        <Divider />                  
                      </div>
                     </div>
                     <Typography
                        variant="p"
                        component="p"
                        className={classes.additionalInfoTitle}
                        gutterBottom
                      >
                        Expected Delivery
                      </Typography>
                     <Typography
                        variant="h6"
                        component="h6"
                        className={classes.additionalInfoData}
                        gutterBottom
                      >
                        {moment(item.addedAt).add(3, 'days').format('MM-DD-YYYY')} 
                      </Typography>
                  </Paper>
                ))}
              </div>
            </Grid>
          </TabContainer>
          }

        {value === 2 && 
          <TabContainer>
            <Grid item xs={12} sm={12} md={16} >
              <div className={classes.current} >
                {past.map((item) => (
                  <Paper key={item.book.id} className={classes.paperStyle}  >
                    <div className={classes.listBooks}>
                      <div className={classes.imageContainer} >
                        <div key={item.book.productName} className={classes.imageWrapper} >
                          <img
                            src={item.book.imageURL}
                            alt={item.book.productName}
                            className={classes.image}
                          />
                        </div>
                      </div>
                      <div className={classes.descContainer} >
                        <Typography
                          variant="h5"
                          component="h5"
                          className={classes.listItemTitle}
                          gutterBottom
                        >
                          {item.book.productName}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          className={classes.listItemDescription}
                          gutterBottom
                        >
                          {item.book.authorName}
                        </Typography>
                        <Divider />                  
                      </div>
                     </div>
                     <Typography
                        variant="p"
                        component="p"
                        className={classes.additionalInfoTitle}
                        gutterBottom
                      >
                        Returned On
                      </Typography>
                     <Typography
                        variant="h6"
                        component="h6"
                        className={classes.additionalInfoData}
                        gutterBottom
                      >
                        {moment(item.addedAt).format('MM-DD-YYYY')} 
                      </Typography>
                  </Paper>
                ))}
              </div>
            </Grid>
          </TabContainer>
          }
      </div>
    );
  }
}

MyBooks.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
  current: makeSelectCurrent(),
  upcoming: makeSelectUpcoming(),
  past: makeSelectPast(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMyBooks: () => dispatch(getMyBooks()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'myBooks', reducer });
const withSaga = injectSaga({ key: 'myBooks', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles)
)(MyBooks);
