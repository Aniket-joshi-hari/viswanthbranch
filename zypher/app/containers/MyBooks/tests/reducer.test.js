import { fromJS } from 'immutable';
import myBooksReducer from '../reducer';

describe('myBooksReducer', () => {
  it('returns the initial state', () => {
    expect(myBooksReducer(undefined, {})).toEqual(fromJS({}));
  });
});
