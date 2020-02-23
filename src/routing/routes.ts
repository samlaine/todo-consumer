import { IRoute, RouteNames } from 'types/routing'
import { Login as LoginScreen, TodoList as TodoListScreen, CreateUser as CreateUserScreen } from 'screens'

export const routes: IRoute[] = [
    {
        name: RouteNames.USER_CREATE,
        component: CreateUserScreen,
        options: {}
    },
    {
        name: RouteNames.LOGIN,
        component: LoginScreen,
        options: {}
    },
    {
        name: RouteNames.TODO_LIST,
        component: TodoListScreen,
        options: {}
    }
]
