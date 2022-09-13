import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';

import userDataReducer from './UserDataReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  userDataReducer: userDataReducer,
});

const rootReducer = (state, action) => {
  // console.log('ACTIONS', action);
  // Clear all data in redux store to initial.
  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
