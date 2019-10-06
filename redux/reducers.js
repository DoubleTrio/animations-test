import { combineReducers } from 'redux';
import { UPDATE_TEST } from './constants';

const testReducer = (state = 'test', action) => {
  switch (action.type) {
    case UPDATE_TEST:
      return (action.payload);
    default:
      return state;
    }
};

const reducer = combineReducers({
  testData: testReducer,
});

export default reducer;