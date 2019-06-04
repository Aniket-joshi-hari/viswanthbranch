import { fromJS } from 'immutable';
import { SetUserData, SetUserDataError, SetUserPhoneNumber } from './constants';

const initialState = fromJS({
    uid: '',
    email: '',
    fullName: '',
    userImageURL: '',
    error: '',
    phoneNUmber: '',
}); 

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SetUserData:
            return state
                .set('uid', action.uid )
                .set('email', action.email)
                .set('fullName', action.fullName)
                .set('userImageURL', action.userImageURL);
                
        case SetUserDataError:
            return state
                .set('error', action.error);

        case SetUserPhoneNumber:
            return state
                .set('phoneNumber', action.phoneNumber);
                
        default:
            return state;
    }
}

export default appReducer;