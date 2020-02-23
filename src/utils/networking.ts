import axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios'

const DEFAULT_TIMEOUT = 10000
// TODO get from env
const BASE_URL = 'http://localhost:8080'

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }

const DEFAULT_HTTP_CLIENT_CONFIG: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: DEFAULT_HEADERS,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true // Pass cookies automatically with requests
}

class Networking {
    private httpClient: AxiosInstance

    private errorHandlerFn: (error: any) => any

    constructor() {
        this.httpClient = axios.create(DEFAULT_HTTP_CLIENT_CONFIG)
        this.httpClient.interceptors.response.use(undefined, this.errorHandler)
    }

    private errorHandler = (error: any) => {
        if (this.errorHandlerFn) {
            this.errorHandlerFn(error)
        }
        // TODO: log errors somewhere?
        return Promise.reject(error)
    }

    setErrorHandler = (handlerFn: (error: any) => any) => {
        this.errorHandlerFn = handlerFn
    }

    setAuthToken = (token: string) => {
        // eslint-disable-next-line dot-notation
        this.httpClient.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    httpGet = (url: string, options: AxiosRequestConfig = {}): AxiosPromise => {
        return this.httpClient.get(url, options)
    }

    httpPost = (url: string, data: any = {}, options: AxiosRequestConfig = {}): AxiosPromise => {
        return this.httpClient.post(url, data, options)
    }

    httpPut = (url: string, data: any = {}, options: AxiosRequestConfig = {}): AxiosPromise => {
        return this.httpClient.put(url, data, options)
    }

    httpDelete = (url: string, options: AxiosRequestConfig = {}): AxiosPromise => {
        return this.httpClient.delete(url, options)
    }
}

export const networking = new Networking()
