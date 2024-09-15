import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from '../Services/Reducers/Root-Reducer/Root-Reducer';

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

// middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; 