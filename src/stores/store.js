import {createStore, combineReducers} from "redux"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import basketReducer from "./basketReducer"
import orderReducer from "./orderReducer";
import feedbackReducer from "./feedbackReducer";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import bonusesReducer from "./bonusesReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    basket: basketReducer,
    order: orderReducer,
    feedback: feedbackReducer,
    users: usersReducer,
    user: userReducer,
    bonuses: bonusesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistorStore = persistStore(store)
