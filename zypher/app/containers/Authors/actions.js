/*
 *
 * Authors actions
 *
 */

import { LoadAuthorsData, SetAuthorsData, LoadAuthorsDataError } from './constants';


export function loadAuthorsData() {
  return {
    type: LoadAuthorsData
  };
}

export function setAuthorsData(authors) {
  return {
    type: SetAuthorsData,
    authors
  }
}

export function loadingAuthorsDataError(error) {
  return {
    type: LoadAuthorsDataError,
    error,
  }
}
