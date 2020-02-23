import * as React from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'

import { ITodoItem } from 'types/todo'
import { theme } from 'theme'

import { TodoListItem } from './TodoListItem'
import { Typography } from './primitives'

interface TodoListProps {
    todos: ITodoItem[]
    onPress: (todoItem: ITodoItem) => void
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    emptyState: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTitle: {
        color: theme.colors.mediumPurple
    }
})

export const TodoFlatList: React.FC<TodoListProps> = ({ todos, onPress }) => {
    const renderTodo: ListRenderItem<ITodoItem> = ({ item, index }) => {
        return (
            <TodoListItem
                key={item.id}
                title={item.title}
                desc={item.desc}
                done={item.status}
                onPress={() => onPress(item)}
                even={index % 2 === 0}
            />
        )
    }
    const keyExtractor = (item: ITodoItem) => item.id.toString()

    if (todos.length === 0) {
        return (
            <View style={styles.emptyState}>
                <Typography style={styles.emptyTitle} size="xl">
                    Start by Adding todos
                </Typography>
            </View>
        )
    }
    return <FlatList style={styles.list} data={todos} renderItem={renderTodo} keyExtractor={keyExtractor} />
}
