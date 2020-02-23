import { IAuthState } from 'state/auth'
import { ITodoState } from 'state/todo'

export interface IState {
    authState: IAuthState
    todoState: ITodoState
}
