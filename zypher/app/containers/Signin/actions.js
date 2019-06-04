/*
 *
 * Signup actions
 *
 */

import { 
  ActivateSigninModal,
  DeactivateSigninModal,
  GetOTPAction,
  ShowPhoneNumberModal, 
  ShowOTPModal,
  SetOTP,
  VerifyOTPAction,
  ShowLoginModal,
  ShowModalInterests
} from './constants';


export function activateSigninModal(openModal) {
  return {
    type: ActivateSigninModal,
    openModal
  };
}

export function deactivateSigninModal(openModal) {
  return {
    type: DeactivateSigninModal,
    openModal
  };
}

export function getOTPAction() {
  return {
    type: GetOTPAction,
  };
}

export function showPhoneNumberModal(showModal) {
  return {
    type: ShowPhoneNumberModal,
    showModal,
  };
}

export function showOTPModal(showModal) {
  return {
    type: ShowOTPModal,
    showModal
  };
}

export function setOTP(OTP) {
  return {
    type: SetOTP,
    OTP,
  };
}

export function verifyOTPAction() {
  return {
    type: VerifyOTPAction,
  };
}

export function showLoginModal(showModal) {
  return {
    type: ShowLoginModal,
    showModal,
  }
}

export function showModalInterests(showModal) {
  return {
    type: ShowModalInterests,
    showModal,
  }
}