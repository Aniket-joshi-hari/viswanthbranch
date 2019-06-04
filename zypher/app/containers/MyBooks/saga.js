import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { requestAxios } from 'utils/request';
import { GetMyBooks } from './constants';
import { setMyBooks } from './actions';


export function* getMyBooksDetails() {
  const requestURL = `https://test-zypher.herokuapp.com/orders/getMyBooks`;
  const userId = "5bd60ecd63bbf072cd7c92a9";
  const params = {
    userId,
  };
  try {
    const response = yield call(requestAxios, requestURL, params);
    if (response.data.status == 1) {
      const current = response.data.books.currentlyDelivered;
      const upcoming = response.data.books.toBeDelivered;
      const past = response.data.books.returnedBooks;
      yield put(setMyBooks(current, upcoming, past));
    }
  } catch(err) {
    console.log(err);
  }
}

export default function* myBooksSaga() {
  yield takeLatest(GetMyBooks, getMyBooksDetails);
}
