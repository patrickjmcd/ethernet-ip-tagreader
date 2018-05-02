import { ADD_TAG_INPUT_UPDATE, ADD_TAG } from '../actions/types';

const INITIAL_STATE = { tagName: '', tagVanity: '', ipAddress: '192.168.1.11' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TAG_INPUT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        case ADD_TAG:
            return { ...state, tagName: '', tagVanity: '' };

        default:
            return state;
    }
};
