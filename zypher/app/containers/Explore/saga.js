import { call, select, takeLatest, put } from 'redux-saga/effects';
import  { requestGetAxios }  from 'utils/request';
import { LoadExploreData } from './constants';
import { setExploreData, loadingExploreDataError } from './actions';

export function* getExploreDetails() {
  const requestURL = `https://test-zypher.herokuapp.com/test/test`;
  try {
    const response = yield call(requestGetAxios, requestURL);
    yield put(setExploreData(response.data.authors, response.data.category, response.data.themes));
    // console.log(response.authors);
    // console.log(response.category);
    // console.log(response.themes);
  } catch (err) {
    yield put( loadingExploreDataError(err) );
  }
}

// Individual exports for testing
export default function* exploreSaga() {
  yield takeLatest(LoadExploreData, getExploreDetails);
}
