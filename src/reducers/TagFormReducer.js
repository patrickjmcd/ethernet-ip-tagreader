import { ADD_TAG_NAME_UPDATE } from '../actions/types';

const INITIAL_STATE = { tagName: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TAG_NAME_UPDATE:
            return { ...state, tagName: action.payload };

        default:
            return state;
    }
};
