export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'

export interface ISetAuthToken {
    type: 'SET_AUTH_TOKEN'
    payload: {
        token: string
    }
}

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'

export interface IRegisterUser {
    type: 'REGISTER_USER'
}
export interface IRegisterUserFailed {
    type: 'REGISTER_USER_FAILED'
    payload: {
        code: number
        message: string
    }
}
export interface IRegisterUserSuccess {
    type: 'REGISTER_USER_SUCCESS'
}

export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export interface ILogin {
    type: 'LOGIN'
}
export interface ILoginFailed {
    type: 'LOGIN_FAILED'
    payload: {
        code: number
        message: string
    }
}
export interface ILoginSuccess {
    type: 'LOGIN_SUCCESS'
    payload: { token: string }
}
