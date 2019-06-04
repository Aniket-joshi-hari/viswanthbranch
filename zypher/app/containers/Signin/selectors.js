import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signin state domain
 */

const selectSignin = state => state.get('signin', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Signup
 */

const makeSelectAccessToken = () => 
  createSelector(selectSignin, signinState => signinState.get('accessToken'));

const makeSelectUserName = () => 
  createSelector(selectSignin, signinState => signinState.get('userName'));

const makeSelectUserId = () => 
  createSelector(selectSignin, signinState => signinState.get('userId'));

const makeSelectError = () => 
  createSelector(selectSignin, signinState => signinState.get('error'));

const makeSelectOpenModal = () =>
  createSelector(selectSignin, signinState => signinState.get('openModal'));

const makeSelectShowModalLogin = () =>
  createSelector(selectSignin, signinState => signinState.get('showModalLogin'));

const makeSelectShowModalPhoneNumber = () => 
  createSelector(selectSignin, signinState => signinState.get('showModalPhoneNumber'));

const makeSelectShowModalOTP = () =>
  createSelector(selectSignin, signinState => signinState.get('showModalOTP'));

const makeSelectOTP = () =>
  createSelector(selectSignin, signinState => signinState.get('otp'));

const makeSelectshowModalInterests = () =>
  createSelector(selectSignin, signinState => signinState.get('showModalInterests'));

export { 
  selectSignin,
  makeSelectAccessToken,
  makeSelectUserName,
  makeSelectUserId,
  makeSelectError,
  makeSelectOpenModal,
  makeSelectShowModalLogin,
  makeSelectShowModalPhoneNumber,
  makeSelectShowModalOTP,
  makeSelectOTP,
  makeSelectshowModalInterests
};
