import { combineReducers } from 'redux';
import SettingsReducer from './SettingsReducer';
import TagsReducer from './TagsReducer';

export default combineReducers({
  settings: SettingsReducer,
  tags: TagsReducer
});
