import { call, select, takeLatest, put } from 'redux-saga/effects';
import  { requestAxios }  from 'utils/request';
import { GetCartList, RemoveCartItem } from './constants';
import {  setCartList } from './actions';
import { makeSelectRemoveCartItem } from './selectors';

export function* getCartPageDetails() {
  const requestURL = `https://test-zypher.herokuapp.com/user/cart/getCart`;
  const userId = "5ccac7d72669d60017dadd51";
  const params = {
    userId,
  };
  try {
    const response = yield call(requestAxios, requestURL, params);
    if (response.data.status == 1) {
      yield put(setCartList(response.data.items));
    }
  } catch(err) {
    console.log(err);
  }
}

export function* deleteCartItem() {
  const requestURL = `https://test-zypher.herokuapp.com/user/cart/remove-product-from-cart`;
  const pid = yield select(makeSelectRemoveCartItem());
  const userId = "5ccac7d72669d60017dadd51";
  const params = {
    pid,
    userId
  };
  try {
    const response = yield call(requestAxios, requestURL, params);
    if (response.data.status == 1) {
      yield call(getCartPageDetails);
    }
  } catch(err) {
    console.log(err);
  }
}

export default function* cartPageSaga() {
  yield takeLatest(GetCartList, getCartPageDetails);
  yield takeLatest(RemoveCartItem, deleteCartItem);
}