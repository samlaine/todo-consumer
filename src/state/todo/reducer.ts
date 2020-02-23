import { ITodoItem } from 'types/todo'

import {
    SAVE_TODO,
    SAVE_TODO_FAILED,
    SAVE_TODO_SUCCESS,
    REMOVE_TODO,
    REMOVE_TODO_FAILED,
    REMOVE_TODO_SUCCESS,
    GET_TODOS,
    GET_TODOS_FAILED,
    GET_TODOS_SUCCESS,
    ISaveTodo,
    ISaveTodoFailed,
    ISaveTodoSuccess,
    IRemoveTodo,
    IRemoveTodoFailed,
    IRemoveTodoSuccess,
    IGetTodos,
    IGetTodosFailed,
    IGetTodosSuccess
} from './types'

const getExistingIndex = (todos: ITodoItem[], id: number) => todos.findIndex(todo => todo.id === id)

const initialState = {
    todos: []
}

type TTodoActions =
    | ISaveTodo
    | ISaveTodoFailed
    | ISaveTodoSuccess
    | IRemoveTodo
    | IRemoveTodoFailed
    | IRemoveTodoSuccess
    | IGetTodos
    | IGetTodosFailed
    | IGetTodosSuccess

export interface ITodoState {
    todos: ITodoItem[]
}

export const todoReducer = (state: ITodoState = initialState, action: TTodoActions): ITodoState => {
    switch (action.type) {
        case SAVE_TODO:
        case REMOVE_TODO:
        case GET_TODOS:
            return state

        case SAVE_TODO_FAILED:
        case REMOVE_TODO_FAILED:
        case GET_TODOS_FAILED:
            return state

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos
            }
        case REMOVE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.todoId)
            }
        case SAVE_TODO_SUCCESS:
            if (getExistingIndex(state.todos, action.payload.todo.id) >= 0) {
                const newTodos = [...state.todos]
                newTodos[getExistingIndex(state.todos, action.payload.todo.id)] = action.payload.todo
                return { ...state, todos: newTodos }
            }
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            }

        default:
            return state
    }
}
