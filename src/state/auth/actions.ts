import { Dispatch } from 'redux'

import { loginWithUser, registerUser } from 'api/auth'
import { networking } from 'utils'

import {
    SET_AUTH_TOKEN,
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED
} from './types'

export const setAuthToken = (token: string) => (dispatch: Dispatch) =>
    dispatch({
        type: SET_AUTH_TOKEN,
        payload: { token }
    })

export const login = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch({ type: LOGIN })
    return loginWithUser(email, password)
        .then(({ data }) => {
            networking.setAuthToken(data.access_token)
            dispatch({ type: LOGIN_SUCCESS, payload: { token: data.access_token } })
        })
        .catch(e => {
            if (e.response) {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: {
                        code: e.response.code,
                        message: e.response.message
                    }
                })
            } else {
                dispatch({
                    type: LOGIN_FAILED
                })
            }
        })
}

export const register = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch({ type: REGISTER_USER })

    return registerUser(email, password)
        .then(() => {
            dispatch({ type: REGISTER_USER_SUCCESS })
        })
        .catch(e => {
            if (e.response) {
                dispatch({
                    type: REGISTER_USER_FAILED,
                    payload: {
                        code: e.response.code,
                        message: e.response.message
                    }
                })
            } else {
                dispatch({
                    type: REGISTER_USER_FAILED
                })
            }
        })
}
