/*
 *
 * Explore actions
 *
 */

import { LoadExploreData, SetExploreData, LoadExploreDataError } from './constants';


export function loadExploreData() {
  return {
    type: LoadExploreData
  };
}

export function setExploreData(authors, category, themes) {
  return {
    type: SetExploreData,
    authors,
    category,
    themes
  }
}

export function loadingExploreDataError(error) {
  return {
    type: LoadExploreDataError,
    error,
  }
}
