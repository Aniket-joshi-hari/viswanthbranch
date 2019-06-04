import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myBooks state domain
 */

const selectMyBooks = state => state.get('myBooks', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyBooks
 */

// const makeSelectMyBooks = () =>
//   createSelector(selectMyBooks, substate => substate.toJS());

const makeSelectCurrent = () =>
  createSelector(selectMyBooks, myBooksState => myBooksState.get('current'));

const makeSelectUpcoming = () =>
  createSelector(selectMyBooks, myBooksState => myBooksState.get('upcoming'));

const makeSelectPast = () =>
  createSelector(selectMyBooks, myBooksState => myBooksState.get('past'));

export { 
  makeSelectCurrent,
  makeSelectUpcoming,
  makeSelectPast
 };
