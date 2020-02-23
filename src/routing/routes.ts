import { IRoute, RouteNames } from 'types/routing'
import { Login as LoginScreen, TodoList as TodoListScreen, CreateUser as CreateUserScreen } from 'screens'

export const routes: IRoute[] = [
    {
        name: RouteNames.USER_CREATE,
        component: CreateUserScreen,
        options: {
            title: 'Register user'
        }
    },
    {
        name: RouteNames.LOGIN,
        component: LoginScreen,
        options: {
            title: 'Login'
        }
    },
    {
        name: RouteNames.TODO_LIST,
        component: TodoListScreen,
        options: {
            title: 'Todos'
        }
    }
]
