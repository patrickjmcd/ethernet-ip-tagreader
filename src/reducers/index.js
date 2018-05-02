import { combineReducers } from 'redux';
import TagFormReducer from './TagFormReducer';

export default combineReducers({
  tagForm: TagFormReducer
});
