/*
 *
 * MyBooks reducer
 *
 */

import { fromJS } from 'immutable';
import { GetMyBooks, SetMyBooks } from './constants';

export const initialState = fromJS({
  loading: false,
  current: [],
  upcoming: [],
  past: [],
});

function myBooksReducer(state = initialState, action) {
  switch (action.type) {
    case GetMyBooks:
      return state
        .set('loading', true);

    case SetMyBooks:
      return state  
        .set('current', action.current)
        .set('upcoming', action.upcoming)
        .set('past', action.past); 
      
    default:
      return state;
  }
}

export default myBooksReducer;
