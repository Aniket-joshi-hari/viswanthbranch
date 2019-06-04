/**
 *
 * Signin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectUid,
  makeSelectFullName,
  makeSelectUserImageURL,
  makeSelectPhoneNumber,
} from '../App/selectors';

import { 
  makeSelectOpenModal,
  makeSelectShowModalLogin,
  makeSelectShowModalPhoneNumber,
  makeSelectShowModalOTP,
  makeSelectOTP,
  makeSelectshowModalInterests
} from './selectors';

import { 
  activateSigninModal,
  deactivateSigninModal,
  getOTPAction,
  showPhoneNumberModal,
  showOTPModal,
  setOTP,
  verifyOTPAction,
  showLoginModal,
 } from './actions';
import { setUserData, setUserPhoneNumber, } from '../App/action';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoggedIn from './LoggedIn';
import { withStyles } from '@material-ui/core/styles';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../utils/firebaseConfig';
import ChooseInterest from './ChooseInterest';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
};
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 113.75,
    height: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  container: {
      flexWrap: 'nowrap',
      marginTop: '2%'
  },
  input: {
      margin: theme.spacing.unit,
  },
  textField: {
      marginLeft: '25%',
      marginRight: '25%',
      width: '50%',
  },
  continueButton: {
      marginLeft: '45%',
      marginRight: '45%',
      marginTop: '6%'
  },
  getStartedButton: {
    whiteSpace: 'nowrap',
    margin: theme.spacing.unit,
  }
});


export class Signin extends React.PureComponent {
  handleGoogleLogin = () => {
    this.props.signInWithGoogle();
  }

  handleFacebookLogin = () => {
    this.props.signInWithFacebook();
  }

  render(){
    const {
      classes,
      user,
      openModal,
      handleCloseModal,
    } = this.props;
    if (user) {
      this.props.handleUserData(
        this.props.user.uid,
        this.props.user.email,
        this.props.user.displayName,
        this.props.user.photoURL,
        this.props.changeModal(),
      );
      if (!this.props.phoneNumber) {
        this.props.activatePhoneNumberModal();
      }
    }
    if (!user) {
      // this.props.resetModal();
    }
    
    return(
      <>
        { user 
          ? <LoggedIn classes="loggedIn" fullName={this.props.fullName} userImageURL={this.props.userImageURL} signOut={this.props.signOut} >
            </LoggedIn>
          : <Button
                variant="contained"
                color="primary"
                onClick={this.props.handleOpenModal}
                className={classes.getStartedButton}
                >
                  Get Started
            </Button>
        }
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openModal}
            onClose={handleCloseModal}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <div style={{display: this.props.showModalLogin }}>
                <div style={{ textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%', }}>
                  <h1>Signup</h1>
                  <h4>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h4>
                </div>
                <div style={{ textAlign: 'center', width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%', }}>
                  <Button variant="outlined" className={classes.button} onClick={this.handleGoogleLogin} style={{marginRight: '15px'}} >
                    Login In With Google
                  </Button>
                  <Button variant="outlined" className={classes.button} onClick={this.handleFacebookLogin} >
                    Login In With Facebook
                  </Button>
                </div>
              </div>

              <div style={{display: this.props.showModalPhoneNumber }}>
                <div style={{ textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%',}}>
                  <h1>Signup</h1>
                  <h4>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h4>
                  <TextField
                    id="standard-number"
                    label="phone number"
                    placeholder=""
                    className={classes.textField}
                    value={this.props.phoneNumber}
                    onChange={this.props.onChangePhoneNumber}
                    margin="normal"
                  />
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={this.props.getOTP}
                  >
                    continue
                  </Button>
                </div>
              </div>

              <div style={{display: this.props.showModalOTP }}>
                <div style={{ textAlign: 'center', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%',}}>
                  <h1>OTP verification</h1>
                  <h4>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</h4>
                  <TextField
                    id="standard-number"
                    label="OTP"
                    placeholder=""
                    className={classes.textField}
                    value={this.props.otp}
                    onChange={this.props.onChangeOTP}
                    margin="normal"
                  />
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={this.props.verifyOTP}
                  >
                    verify
                  </Button>
                </div>
              </div>

            <div style={{ display: this.props.showModalInterests}}>
                <ChooseInterest />
              </div>

            </div>
          </Modal>
      </>
    )
  }
}

Signin.propTypes = {
  openModal: PropTypes.bool,
  handleOpenModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  handleUserData: PropTypes.func,
  userImageURL: PropTypes.string,
  phoneNumber: PropTypes.number,
  onChangePhoneNumber: PropTypes.func,
  getUserPhoneNumber: PropTypes.func,
  getOTP: PropTypes.func,
  showModalLogin: PropTypes.string,
  otp: PropTypes.string,
  verifyOTP: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  uid: makeSelectUid(),
  userImageURL: makeSelectUserImageURL(),
  fullName: makeSelectFullName(),
  otp: makeSelectOTP(),
  openModal: makeSelectOpenModal(),
  phoneNumber: makeSelectPhoneNumber(),
  showModalLogin: makeSelectShowModalLogin(),
  showModalPhoneNumber: makeSelectShowModalPhoneNumber(),
  showModalOTP: makeSelectShowModalOTP(),
  showModalInterests: makeSelectshowModalInterests(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleOpenModal: () => dispatch(activateSigninModal(true)),
    handleCloseModal: () => dispatch(deactivateSigninModal(false)),
    handleUserData: (uid, email, fullName, userImageURL) => dispatch(setUserData(uid, email, fullName, userImageURL)),
    onChangePhoneNumber: (evt) => dispatch(setUserPhoneNumber(evt.target.value)),
    onChangeOTP: (evt) => dispatch(setOTP(evt.target.value)),
    getOTP: () => {
      dispatch(getOTPAction());
    } ,
    verifyOTP: () => dispatch(verifyOTPAction()),
    changeModal: () => {
      dispatch(showLoginModal('none'));
    },
    activatePhoneNumberModal: () => dispatch(showPhoneNumberModal('block')),
    resetModal: () => {
      dispatch(showLoginModal('block'));
      dispatch(showPhoneNumberModal('none'));
      dispatch(showOTPModal('none'));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signin', reducer });
const withSaga = injectSaga({ key: 'signin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
  withFirebaseAuth({
    providers,
    firebaseAppAuth,
  }),
)(Signin);
