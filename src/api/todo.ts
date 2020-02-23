import { networking } from 'utils'
import { AxiosPromise } from 'axios'

export interface ITodoBody {
    title: string
    desc: string
    status: boolean
}

/**
 * todo endpoints require Auth header
 */

export const getTodos = (): AxiosPromise<any> => networking.httpGet('/todos')

export const deleteTodo = (id: number): AxiosPromise<any> => networking.httpDelete(`/todo/${id}`)

export const createTodo = (todoItem: ITodoBody): AxiosPromise<any> => networking.httpPost('/todo', todoItem)

export const modifyTodo = (id: number, todoItem: ITodoBody): AxiosPromise<any> =>
    networking.httpPut(`/todo/${id}`, todoItem)
