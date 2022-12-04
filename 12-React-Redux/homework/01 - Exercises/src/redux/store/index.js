import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);

// const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );

export default store;
