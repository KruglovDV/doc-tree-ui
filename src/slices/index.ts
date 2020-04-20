import { combineReducers } from 'redux';
import user, * as userActions from './user';

export default combineReducers({
  user,
});

const actions = {
  ...userActions,
};

export { actions };
