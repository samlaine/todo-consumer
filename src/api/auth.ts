import { networking } from 'utils'
import { AxiosPromise } from 'axios'

export const registerUser = (email: string, password: string): AxiosPromise<any> =>
    networking.httpPost('/register', { email, password })

export const loginWithUser = (email: string, password: string): AxiosPromise<any> =>
    networking.httpPost('/authenticate', { email, password })
