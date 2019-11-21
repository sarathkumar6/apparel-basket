import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(
        rootReducer, 
        applyMiddleware(...middlewares) // takes infinite number of middlewares
    );

export default store;
