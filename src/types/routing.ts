import * as React from 'react'

export interface IRoute {
    name: string
    component: React.FC
    options: object | undefined
}

export enum RouteNames {
    USER_CREATE = 'CreateUser',
    LOGIN = 'Login',
    TODO_LIST = 'TodoList',
    TODO_CREATE = 'CreteTodo'
}
