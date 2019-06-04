import { SetUserData, SetUserDataError, SetUserPhoneNumber } from './constants';

export function setUserData(uid, email, fullName, userImageURL) {
    return {
        type: SetUserData,
        uid,
        email, 
        fullName,
        userImageURL
    };
} 

export function setUserDataError(error) {
    return {
        type: SetUserDataError,
        error
    };
}

export function setUserPhoneNumber(phoneNumber) {
    return {
        type: SetUserPhoneNumber,
        phoneNumber
    };
}