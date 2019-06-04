import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectOTP } from './selectors';
import { GetOTPAction, VerifyOTPAction } from './constants';
import { 
    makeSelectUid, 
    makeSelectEmail, 
    makeSelectFullName, 
    makeSelectUserImageURL,
    makeSelectPhoneNumber,
 } from 'containers/App/selectors';
 import { requestAxios } from 'utils/request';
import { deactivateSigninModal, showOTPModal, showPhoneNumberModal,
    showModalInterests } from './actions';


export function* setUserLogin() {
    const uid = yield select(makeSelectUid());
    const email = yield select(makeSelectEmail());
    const fullName = yield select(makeSelectFullName());
    const userImageURL = yield select(makeSelectUserImageURL());
    const phoneNumber = yield select(makeSelectPhoneNumber());
    const requestURL = `https://test-zypher.herokuapp.com/onboarding/registerDirect`;
    const uniqueCode = 'adse';
    if (uid && email ) {
        const params = {
            uid,
            email,
            fullName,
            userImageURL,
            phoneNumber,
            uniqueCode,
        }

        try {
            const response = yield call(requestAxios, requestURL, params);
            if (response.data.status == 1) {
                yield put(showPhoneNumberModal('none'));
                yield put(showOTPModal('block'));
            }
        } catch(err) {
            console.log(err);
        }
    }
}

export function* verifyUserOTP() {
    const uid = yield select(makeSelectUid());
    const phoneNumber = yield select(makeSelectPhoneNumber());
    const otp = yield select(makeSelectOTP());
    const requestURL = `https://test-zypher.herokuapp.com/onboarding/verifyOTP`;
    if(otp) {
        const params ={
            uid,
            phoneNumber,
            otp,
        }

        try {
            console.log(params);
            const response = yield call(requestAxios, requestURL, params);
            if (response.data.status == 1) {
                alert(" user has been registered");
                // yield put(deactivateSigninModal(false));
                yield put(showOTPModal('none'));
                yield put(showModalInterests('block'));
            };
        } catch(err) {
            console.log(err);
        }
    }
}

// post selected interests

export default function* signinSaga() {
  yield takeLatest(GetOTPAction, setUserLogin);
  yield takeLatest(VerifyOTPAction, verifyUserOTP);
}