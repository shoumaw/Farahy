import authReducer from './authReducer'
import homeReducer from './homeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  category: categoryReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object