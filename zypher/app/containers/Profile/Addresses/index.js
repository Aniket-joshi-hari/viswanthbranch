import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

import DialogComponent from '../../../components/DialogComponent';
import Form from '../../../components/Form';
import GMap from '../../../components/GMap';

const styles = theme => ({
  root: {},
  title: {
    padding: '30px 30px 0px',
  },
  subTitle: {
    padding: '20px 10px',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 30,
    // border: '1px solid black',
    marginLeft: 50,
    borderRadius: 5,
  },
  paper: {
    margin: '20px 40px',
    padding: 10,
  },
  address: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridColumnGap: '50px',
    marginBottom: 20,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const fieldsConfig = [
  {
    type: "list",
    required: true,
    field: "addressType",
    label: "Address Type",
    component: Select,
    fullWidth: true,
    inputProps: {
      name: 'Address Type',
      id: 'addressType',
    },
    defaultValue: "home",
    items: [
      { label: "Home", value: "home" },
      { label: "Office", value: "office" }
    ]
  },
  {
    type: "input",
    required: true,
    field: "streetAddress",
    label: "Street Address",
    placeholder: "Street / Locality",
    className: 'textField',
    component: TextField
  },
  {
    type: "input",
    required: true,
    field: "doorNumber",
    label: "Door Number",
    placeholder: "Flat / House No. / Floor",
    className: 'textField',
    component: TextField
  },
];

class Addresses extends Component {
  state = {
    addresses: [],
    openForm: false, // true
    isEdit: false,
  };

  componentDidMount() {
    // fetch addresses
    fetch('https://test-zypher.herokuapp.com/orders/getShippingAddress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: '5c5804bac2a6640017ece825',
      }),
    })
      .then(res => res.json())
      .then(({ status, address }) => {
        if (status && address.shippingAddress) {
          this.setState({
            addresses: address.shippingAddress,
          });
        }
      })
      .catch(console.log);
  }

  toggleDialog = action => {
    this.setState(({ openForm }) => ({
      openForm: !openForm,
      isEdit: action === 'edit',
    }));
  };

  handleFormSubmit = (data) => {
    this.toggleDialog();
    console.log(data);
  };

  render() {
    const { classes } = this.props;
    const { addresses, openForm, isEdit } = this.state;
    return (
      <div className={classes.root}>
        <DialogComponent
          render={() => (
            <Form
              onClose={this.toggleDialog}
              btnText={isEdit ? 'Update' : 'Save'}
              closeBtn
              onSubmit={this.handleFormSubmit}
              fieldsConfig={fieldsConfig}
              data={{}}
              render={() => (<GMap
                google={this.props.google}
                center={{ lat: 18.5204, lng: 73.8567 }}
                height='300px'
                zoom={15}
                 />)}
            />
          )}
          open={openForm}
          title={`${isEdit ? 'Edit' : 'Add'} Address`}
          onClose={this.toggleDialog}
        />
        <Typography variant="h5" component="h3" className={classes.title}>
          My Addresses
        </Typography>
        <main className={classes.content}>
          <Fab
            variant="extended"
            aria-label="Add"
            onClick={this.toggleDialog}
            className={classes.fab}
          >
            <AddIcon className={classes.extendedIcon} />
            Add New Address
          </Fab>
          <Typography variant="h5" component="h4" className={classes.subTitle}>
            {addresses && addresses.length
              ? 'Saved Addresses'
              : 'There are no saved addresses'}
          </Typography>
          {addresses.map((address, i) => {
            if (!address.type) return null;
            let content = '';
            [
              'doorNo',
              'streetAddress',
              'area',
              'landmark',
              'city',
              'pincode',
            ].forEach(x => {
              content += address[x] ? `${address[x]} ` : '';
            });
            return (
              <Paper className={classes.paper} elevation={1} key={i}>
                <Typography variant="h5" component="h3">
                  <div className={classes.address}>
                    <span>{address.type}</span>
                  </div>
                  <p>{content}</p>
                </Typography>
              </Paper>
            );
          })}
        </main>
      </div>
    );
  }
}

Addresses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Addresses);
