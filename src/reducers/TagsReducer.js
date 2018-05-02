import _ from 'lodash';
// import { ScanList } from 'ethernet-ip-scanlist';
import { ADD_TAG, DELETE_TAG } from '../actions/types';

const INITIAL_STATE = { scanList: {}, ipAddress: '192.168.1.11' };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TAG:
            // state.scanList.add(action.payload.tagName, action.payload.tagVanity, 0, 0);
            return { ...state, 
                scanList: {
                    ...state.scanList,
                    [action.payload.tagName]: {
                        tagName: action.payload.tagName, 
                        vanityName: action.payload.tagVanity 
                    }
                }
            };

        case DELETE_TAG:
            // state.scanList.remove(action.payload);
            return { ...state, 
                scanList: _.omit(state.scanList, action.payload) 
            };

        default:
            return state;
    }
};
