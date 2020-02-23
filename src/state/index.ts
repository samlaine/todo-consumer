import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch, TypedUseSelectorHook } from 'react-redux'

import { IState } from 'types/state'

import { authReducer } from './auth'
import { todoReducer } from './todo'

const middleware = applyMiddleware(thunk)

const reducers = combineReducers({ authState: authReducer, todoState: todoReducer })

export const store = createStore(reducers, middleware)

export const useSelector: TypedUseSelectorHook<IState> = useReduxSelector
export const useDispatch = useReduxDispatch
