import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

export const rootReducer = combineReducers({
  user: () => ({}),
});

export const rootEpic = combineEpics();
