import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { Input, Button } from 'components/primitives'
import { ITodoBody } from 'api/todo'
import { theme } from 'theme'

const styles = StyleSheet.create({
    addContainer: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xxs
    }
})

interface TodoInputProps {
    onPress: (todo: ITodoBody) => void
}

export const TodoInput: React.FC<TodoInputProps> = ({ onPress }) => {
    const [todoTitle, setTodoTitle] = React.useState('')
    const [todoDesc, setTodoDesc] = React.useState('')

    const onSubmit = () => {
        onPress({ title: todoTitle, desc: todoDesc, status: false })
        setTodoTitle('')
        setTodoDesc('')
    }
    return (
        <View style={styles.addContainer}>
            <Input placeholder="Todo title" value={todoTitle} onChangeText={setTodoTitle} />
            <Input numberOfLines={2} multiline placeholder="description" value={todoDesc} onChangeText={setTodoDesc} />
            <Button label="Create todo" variant="nude" onPress={onSubmit} />
        </View>
    )
}
