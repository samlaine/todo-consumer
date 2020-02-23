import {
    SET_AUTH_TOKEN,
    REGISTER_USER,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    ISetAuthToken,
    ILogin,
    ILoginFailed,
    ILoginSuccess,
    IRegisterUser,
    IRegisterUserFailed,
    IRegisterUserSuccess
} from './types'

const initialState = {
    accessToken: null,
    userCreated: false,
    authError: null
}

type IAuthActions =
    | ISetAuthToken
    | ILogin
    | ILoginFailed
    | ILoginSuccess
    | IRegisterUser
    | IRegisterUserFailed
    | IRegisterUserSuccess

export interface IAuthState {
    accessToken: string | null
    userCreated: boolean
    authError: {
        code: number
        message: string
    } | null
}

export const authReducer = (state: IAuthState = initialState, action: IAuthActions): IAuthState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case SET_AUTH_TOKEN:
            return {
                ...state,
                accessToken: action.payload.token
            }
        case LOGIN:
            return { ...state, authError: null }
        case REGISTER_USER:
            return { ...state, userCreated: false, authError: null }
        case LOGIN_FAILED:
        case REGISTER_USER_FAILED:
            return { ...state, authError: { code: action.payload.code, message: action.payload.message } }

        case REGISTER_USER_SUCCESS: {
            return { ...state, userCreated: true }
        }
        default:
            return state
    }
}
