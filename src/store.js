import { createStore } from 'redux';
import { userDataReducer } from './reducers';

const store = createStore(userDataReducer);

export default store;
