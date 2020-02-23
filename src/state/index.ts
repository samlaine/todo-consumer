import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { authReducer } from './auth'
import { todoReducer } from './todo'

const middleware = applyMiddleware(thunk)

const reducers = combineReducers({ authState: authReducer, todoState: todoReducer })

export const store = createStore(reducers, middleware)
