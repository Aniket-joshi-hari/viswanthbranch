/*
 *
 * Authors reducer
 *
 */

import { fromJS } from 'immutable';
import { LoadAuthorsData, SetAuthorsData, LoadAuthorsDataError } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  authors: []
});

function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case LoadAuthorsData:
      return state
        .set('loading', true)
        .set('error', false);
    case SetAuthorsData:
      return state
        .set('authors', action.authors)
        .set('loading', false);
    case LoadAuthorsDataError:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default authorsReducer;
