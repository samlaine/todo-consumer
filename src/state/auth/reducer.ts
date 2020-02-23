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
    accessToken: undefined,
    userCreated: false
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
    accessToken: string | undefined
    userCreated: boolean
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
        case LOGIN_FAILED:
            return state
        case REGISTER_USER:
        case REGISTER_USER_FAILED:
            return { ...state, userCreated: false }

        case REGISTER_USER_SUCCESS: {
            return { ...state, userCreated: true }
        }
        default:
            return state
    }
}
