import counterReducer from './counter'
import isLoggedInReducer from './isLogged'

import { combineReducers } from 'redux'


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedInReducer
})