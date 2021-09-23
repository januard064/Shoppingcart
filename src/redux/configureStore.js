import {createStore, combineReducers} from 'redux';

import { Clothes } from './data';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            clothes: Clothes
        })
    );

    return store;
}