import { Actions } from 'react-native-router-flux';
import { ADD_TAG, DELETE_TAG, UPDATE_IP_ADDRESS } from './types';

export const addTag = ({ tagName, tagVanity }) => {
    return {
        type: ADD_TAG,
        payload: { tagName, tagVanity }
    };
};

export const deleteTag = ({ tagName }) => {
    Actions.pop();
    return {
        type: DELETE_TAG,
        payload: tagName
    };
};

export const updateIpAddress = ({ ipAddress }) => {
    return {
        type: UPDATE_IP_ADDRESS,
        payload: ipAddress
    };
};

