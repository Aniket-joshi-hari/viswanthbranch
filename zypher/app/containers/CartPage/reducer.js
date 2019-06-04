/*
 *
 * CartPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GetCartList, SetCartList, RemoveCartItem } from './constants';

export const initialState = fromJS({
  loading: false,
  books: [],
  removeItem: '',
});

function cartPageReducer(state = initialState, action) {
  switch (action.type) {
    case GetCartList:
      return state
        .set('loading', 'true');
    
    case SetCartList:
      return state
        .set('loading', 'false')
        .set('books', action.books);

    case RemoveCartItem:
      return state
        .set('removeItem', action.pid);

    default:
      return state;
  }
}

export default cartPageReducer;
