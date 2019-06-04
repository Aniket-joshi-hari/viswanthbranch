/*
 *
 * Signin reducer
 *
 */

import { fromJS, Set } from 'immutable';
import { 
  ActivateSigninModal,
  DeactivateSigninModal,
  GetOTPAction,
  ShowPhoneNumberModal, 
  ShowOTPModal,
  VerifyOTPAction,
  SetOTP,
  ShowLoginModal,
  ShowModalInterests
} from './constants';

export const initialState = fromJS({
  accessToken: false,
  userName: false,
  userId: false,
  error: false,
  openModal: false,
  showModalLogin: 'none', // block
  showModalPhoneNumber: 'none',
  showModalOTP: 'none',
  showModalInterests: 'block', // none
  otp: '',
});

function signinReducer(state = initialState, action) {
  switch (action.type) {
    case ActivateSigninModal:
      return state  
        .set('openModal', action.openModal);

    case DeactivateSigninModal:
      return state
        .set('openModal', action.openModal);

    case GetOTPAction:
      return state;

    case ShowLoginModal:
      return state
        .set('showModalLogin', action.showModal);
    
    case ShowPhoneNumberModal:
      return state
        .set('showModalPhoneNumber', action.showModal);

    case ShowOTPModal:
      return state 
        .set('showModalOTP', action.showModal);

    case ShowModalInterests:
      return state
        .set('showModalInterests', action.showModal);

    case SetOTP:
      return state
        .set('otp', action.OTP);

    case VerifyOTPAction:
      console.log("inside verify");
      return state;

    default:
      return state;
  }
}

export default signinReducer;
