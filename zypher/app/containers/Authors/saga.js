import { call, select, takeLatest, put } from 'redux-saga/effects';
import  { requestGetAxios }  from 'utils/request';
import { LoadAuthorsData } from './constants';
import { setAuthorsData, loadingAuthorsDataError } from './actions';

export function* getAuthorsDetails() {
  const requestURL = `https://test-zypher.herokuapp.com/author/getAllAuthor`;
  try {
    const response = yield call(requestGetAxios, requestURL);
    yield put(setAuthorsData(response.data.authors));
    console.log(response.authors);
  } catch (err) {
    yield put( loadingAuthorsDataError(err) );
  }
}

// Individual exports for testing
export default function* authorsSaga() {
  yield takeLatest(LoadAuthorsData, getAuthorsDetails);
}
