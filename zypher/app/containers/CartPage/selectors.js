import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cartPage state domain
 */

const selectCartPage = state => state.get('cartPage', initialState);

const makeSelectBooks = () =>
  createSelector(selectCartPage, cartPageState => cartPageState.get('books'));

const makeSelectLoading = () =>
  createSelector(selectCartPage, cartPageState => cartPageState.get('loading'));

const makeSelectRemoveCartItem = () =>
  createSelector(selectCartPage, cartPageState => cartPageState.get('removeItem'));

/**
 * Other specific selectors
 */

/**
 * Default selector used by CartPage
 */

// const makeSelectCartPage = () =>
//   createSelector(selectCartPage, substate => substate.toJS());

// export default makeSelectCartPage;
export { 
  selectCartPage,
  makeSelectBooks,
  makeSelectLoading, 
  makeSelectRemoveCartItem
};
