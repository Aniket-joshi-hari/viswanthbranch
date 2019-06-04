import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authors state domain
 */

const selectAuthors = state => state.get('authors', initialState );

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authors
 */

const makeSelectAuthors = () =>
  createSelector(selectAuthors, authorsState => authorsState.get('authors'));

const makeSelectError = () => 
  createSelector(selectAuthors, authorsState => authorsState.get('error'));

const makeSelectLoading = () =>
  createSelector(selectAuthors, authorsState => authorsState.get('loading'))

export { 
  selectAuthors,
  makeSelectAuthors,
  makeSelectError,
  makeSelectLoading 
};
