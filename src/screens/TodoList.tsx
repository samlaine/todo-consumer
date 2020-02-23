import * as React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { useSelector, useDispatch } from 'state'
import { getUsersTodos, modifyTodoItem, createTodoItem } from 'state/todo'

import { TodoFlatList } from 'components'
import { Input, Button } from 'components/primitives'
import { ITodoItem } from 'types/todo'
import { theme } from 'theme'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addContainer: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xxs
    }
})

export const TodoList = () => {
    const dispatch = useDispatch()
    const [todoTitle, setTodoTitle] = React.useState('')
    const [todoDesc, setTodoDesc] = React.useState('')

    const todos = useSelector(state => state.todoState.todos)

    React.useEffect(() => {
        dispatch(getUsersTodos())
    }, [dispatch])

    const toggleTodo = (todoItem: ITodoItem) => {
        dispatch(modifyTodoItem(todoItem.id, { title: todoItem.title, desc: todoItem.desc, status: !todoItem.status }))
    }

    const createTodo = () => {
        if (todoTitle.length === 0) {
            Alert.alert('Title cannot be empty')
        }
        dispatch(createTodoItem({ title: todoTitle, desc: todoDesc, status: false }))
        setTodoTitle('')
        setTodoDesc('')
    }

    return (
        <>
            <View style={styles.addContainer}>
                <Input placeholder="Todo title" value={todoTitle} onChangeText={setTodoTitle} />
                <Input
                    numberOfLines={1}
                    multiline
                    placeholder="description"
                    value={todoDesc}
                    onChangeText={setTodoDesc}
                />
                <Button label="Create todo" variant="nude" onPress={createTodo} />
            </View>
            <TodoFlatList todos={todos} onPress={toggleTodo} />
        </>
    )
}
