import * as React from 'react'
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'state'
import { getUsersTodos, modifyTodoItem, createTodoItem } from 'state/todo'

import { TodoFlatList, TodoInput } from 'components'
import { ITodoItem } from 'types/todo'
import { ITodoBody } from 'api/todo'

export const TodoList = () => {
    const dispatch = useDispatch()

    const todos = useSelector(state => state.todoState.todos)

    React.useEffect(() => {
        dispatch(getUsersTodos())
    }, [dispatch])

    const toggleTodo = (todoItem: ITodoItem) => {
        dispatch(modifyTodoItem(todoItem.id, { title: todoItem.title, desc: todoItem.desc, status: !todoItem.status }))
    }

    const createTodo = (todo: ITodoBody) => {
        if (todo.title.length === 0) {
            Alert.alert('Title cannot be empty')
        }
        dispatch(createTodoItem(todo))
    }

    // TODO handle deleting

    return (
        <>
            <TodoInput onPress={createTodo} />
            <TodoFlatList todos={todos} onPress={toggleTodo} />
        </>
    )
}
