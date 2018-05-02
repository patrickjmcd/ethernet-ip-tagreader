import { ADD_TAG_INPUT_UPDATE } from './types';

export const addTagNameUpdate = ({ prop, value }) => {
    return {
        type: ADD_TAG_INPUT_UPDATE,
        payload: { prop, value }
    };
};
