/*
 *
 * MyBooks actions
 *
 */

import { SetMyBooks, GetMyBooks } from './constants';

export function getMyBooks() {
  return {
    type: GetMyBooks,
  };
}

export function setMyBooks(current, upcoming, past) {
  return {
    type: SetMyBooks,
    current,
    upcoming,
    past
  }
}