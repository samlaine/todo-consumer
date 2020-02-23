import { Dispatch } from 'redux'

import { SET_AUTH_TOKEN } from './types'

export const setAuthToken = (token: string) => (dispatch: Dispatch) =>
    dispatch({
        type: SET_AUTH_TOKEN,
        payload: { token }
    })
