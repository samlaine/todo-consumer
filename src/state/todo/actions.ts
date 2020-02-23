import { Dispatch } from 'redux'
import { getTodos, deleteTodo, modifyTodo, createTodo, ITodoBody } from 'api/todo'

import {
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILED,
    REMOVE_TODO,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILED,
    SAVE_TODO,
    SAVE_TODO_SUCCESS,
    SAVE_TODO_FAILED
} from './types'

export const getUsersTodos = () => (dispatch: Dispatch) => {
    dispatch({ type: GET_TODOS })
    return getTodos()
        .then(({ data }) => {
            dispatch({ type: GET_TODOS_SUCCESS, payload: { todos: data.todos } })
        })
        .catch(e => {
            if (e.response) {
                dispatch({ type: GET_TODOS_FAILED, payload: { code: e.response.code, message: e.response.message } })
            }
            dispatch({ type: GET_TODOS_FAILED, payload: { code: 500, message: 'http_client_error' } })
        })
}

export const createTodoItem = (todoItem: ITodoBody) => (dispatch: Dispatch) => {
    dispatch({ type: SAVE_TODO })
    return createTodo(todoItem)
        .then(({ data }) => {
            dispatch({
                type: SAVE_TODO_SUCCESS,
                payload: {
                    todo: data.todo
                }
            })
        })
        .catch(e => {
            if (e.response) {
                dispatch({ type: SAVE_TODO_FAILED, payload: { code: e.response.code, message: e.response.message } })
            }
            dispatch({ type: SAVE_TODO_FAILED, payload: { code: 500, message: 'http_client_error' } })
        })
}

export const modifyTodoItem = (id: number, todoItem: ITodoBody) => (dispatch: Dispatch) => {
    dispatch({ type: SAVE_TODO })
    return modifyTodo(id, todoItem)
        .then(({ data }) => {
            dispatch({ type: SAVE_TODO_SUCCESS, payload: { todo: data.todo } })
        })
        .catch(e => {
            if (e.response) {
                dispatch({ type: SAVE_TODO_FAILED, payload: { code: e.response.code, message: e.response.message } })
            }
            dispatch({ type: SAVE_TODO_FAILED, payload: { code: 500, message: 'http_client_error' } })
        })
}

export const deleteTodoItem = (id: number) => (dispatch: Dispatch) => {
    dispatch({ type: REMOVE_TODO })
    return deleteTodo(id)
        .then(() => {
            dispatch({ type: REMOVE_TODO_SUCCESS, payload: { todoId: id } })
        })
        .catch(e => {
            if (e.esponse) {
                dispatch({ type: REMOVE_TODO_FAILED, payload: { code: e.response.code, message: e.response.message } })
            }
            dispatch({ type: REMOVE_TODO_FAILED, payload: { code: 500, message: 'http_client_error' } })
        })
}
