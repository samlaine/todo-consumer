import { ITodoItem } from 'types/todo'

export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'

export interface IGetTodos {
    type: 'GET_TODOS'
}

export interface IGetTodosFailed {
    type: 'GET_TODOS_FAILED'
    payload: {
        code: number
        message: string
    }
}

export interface IGetTodosSuccess {
    type: 'GET_TODOS_SUCCESS'
    payload: {
        todos: ITodoItem[]
    }
}

export const SAVE_TODO = 'SAVE_TODO'
export const SAVE_TODO_FAILED = 'SAVE_TODO_FAILED'
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS'

export interface ISaveTodo {
    type: 'SAVE_TODO'
}

export interface ISaveTodoFailed {
    type: 'SAVE_TODO_FAILED'
    payload: {
        code: number
        message: string
    }
}

export interface ISaveTodoSuccess {
    type: 'SAVE_TODO_SUCCESS'
    payload: {
        todo: ITodoItem
    }
}

export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_TODO_FAILED = 'REMOVE_TODO_FAILED'
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS'

export interface IRemoveTodo {
    type: 'REMOVE_TODO'
}

export interface IRemoveTodoFailed {
    type: 'REMOVE_TODO_FAILED'
    payload: {
        code: number
        message: string
    }
}

export interface IRemoveTodoSuccess {
    type: 'REMOVE_TODO_SUCCESS'
    payload: {
        todoId: number
    }
}
