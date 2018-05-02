import { ADD_TAG, ADD_TAG_NAME_UPDATE } from './types';

export const addTag = (tagName) => {
    return {
        type: ADD_TAG,
        payload: tagName
    };
};


export const addTagNameUpdate = ({ tagName }) => {
    return {
        type: ADD_TAG_NAME_UPDATE,
        payload: tagName
    };
};
