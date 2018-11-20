import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import handleVideoSearch from '../actions/search.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

export default store = (initialState) => {
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

store.dispatch(handleVideoSearch);
