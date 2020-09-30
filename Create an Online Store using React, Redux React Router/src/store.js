import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(promiseMiddleware);
    } else {
        return applyMiddleware(promiseMiddleware)
    }
};

export const store = createStore(reducer, getMiddleware() );