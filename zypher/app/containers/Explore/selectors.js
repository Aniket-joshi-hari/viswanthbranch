import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the explore state domain
 */

const selectExplore = state => state.get('explore', initialState );

/**
 * Other specific selectors
 */

/**
 * Default selector used by Explore
 */

const makeSelectAuthors = () =>
  createSelector(selectExplore, exploreState => exploreState.get('authors'));

const makeSelectCategory = () =>
  createSelector(selectExplore, exploreState => exploreState.get('category'));  

const makeSelectThemes = () =>
  createSelector(selectExplore, exploreState => exploreState.get('themes'));

const makeSelectError = () => 
  createSelector(selectExplore, exploreState => exploreState.get('error'));

const makeSelectLoading = () =>
  createSelector(selectExplore, exploreState => exploreState.get('loading'))

export { 
  selectExplore,
  makeSelectAuthors,
  makeSelectCategory,
  makeSelectThemes,
  makeSelectError,
  makeSelectLoading 
};
