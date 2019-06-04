import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectUid = () =>
  createSelector(selectGlobal, globalState => globalState.get('uid'));

const makeSelectEmail = () =>
  createSelector(selectGlobal, globalState => globalState.get('email'));

const makeSelectFullName = () =>
  createSelector(selectGlobal, globalState => globalState.get('fullName'));

const makeSelectUserImageURL = () =>
  createSelector(selectGlobal, globalState => globalState.get('userImageURL'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectPhoneNumber = () => 
  createSelector(selectGlobal, globalState => globalState.get('phoneNumber'));

const makeSelectAllData = () =>
 createSelector(selectGlobal);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export { 
  selectGlobal,
  makeSelectUid,
  makeSelectEmail,
  makeSelectFullName,
  makeSelectUserImageURL,
  makeSelectError,
  makeSelectLocation ,
  makeSelectPhoneNumber,
  makeSelectAllData,
};
