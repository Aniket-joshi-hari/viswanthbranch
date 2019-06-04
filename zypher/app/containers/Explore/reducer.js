/*
 *
 * Explore reducer
 *
 */

import { fromJS } from 'immutable';
import { LoadExploreData, SetExploreData, LoadExploreDataError } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  authors: [],
  category: [],
  themes: [],
});

function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case LoadExploreData:
      return state
        .set('loading', true)
        .set('error', false);
    case SetExploreData:
      return state
        .set('authors', action.authors)
        .set('category', action.category)
        .set('themes', action.themes)
        .set('loading', false);
    case LoadExploreDataError:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default exploreReducer;
