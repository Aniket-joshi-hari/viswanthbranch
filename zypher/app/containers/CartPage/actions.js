/*
 *
 * CartPage actions
 *
 */

import { GetCartList, SetCartList, RemoveCartItem } from './constants';

export function getCartList() {
  return {
    type: GetCartList,
  };
}

export function setCartList(books) {
  return {
    type: SetCartList,
    books
  }
}

export function removeCartItem (pid) {
  return {
    type: RemoveCartItem,
    pid
  }
}