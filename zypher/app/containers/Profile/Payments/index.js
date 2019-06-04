import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
  root: {},
  title: {
    padding: '30px 30px 0px',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 30,
    border: '1px solid black',
    marginLeft: 50,
    borderRadius: 5,
  },
  paper: {
    margin: '20px 40px',
    padding: 10,
    boxShadow:
      '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
  },
  invoice: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridColumnGap: '50px',
    marginBottom: 20,
  },
  due: {
    padding: '30px 30px 0px',
    marginLeft: 15,
    marginBottom: -10,
  },
  button: {
    marginRight: theme.spacing.unit * 6,
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 500,
    // width: '50%'
  },
});

const options = {
  key: 'rzp_test_MYD2EYTtlIp8zi',
  amount: '200',
  name: 'Zypher',
  currency: 'INR',
  description: 'Sub Activation',
  image: 'your_logo.png',
  handler(response) {
    alert(response.razorpay_payment_id);
  },
  prefill: {
    name: 'Zypher',
    email: 'test@test.com',
  },
  notes: {
    address: 'Hello World',
  },
  theme: {
    color: '#F37254',
  },
};

class AccountDetails extends Component {
  componentDidMount() {
    this.razorPay = new Razorpay(options);
  }

  handlePayment = () => {
    console.log('onclick pay');
    // let rzp = new window.Razorpay(options);
    // rzp.open();
    if (this.razorPay) this.razorPay.open();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h5" component="h3" className={classes.title}>
          My Payments
        </Typography>
        <main className={classes.content}>
          <Typography
            variant="h5"
            component="h3"
            className={classNames(classes.invoice, classes.due)}
          >
            <span>Your Balance Due</span>
            <span>Rs 380</span>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.button}
              onClick={this.handlePayment}
            >
              Pay
            </Button>
          </Typography>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h5" component="h3">
              <div className={classes.invoice}>
                <span>Invoice for April</span>
                <span>Rs 549</span>
                <span>Unpaid</span>
              </div>
              <span>5 days ago</span>
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h5" component="h3">
              <div className={classes.invoice}>
                <span>Invoice for March</span>
                <span>Rs 549</span>
                <span>Paid</span>
              </div>
              <span>35 days ago</span>
            </Typography>
          </Paper>
        </main>
      </div>
    );
  }
}

AccountDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetails);
