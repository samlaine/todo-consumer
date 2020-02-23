import * as React from 'react'
import CheckBox from 'react-native-check-box'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Typography } from 'components/primitives'
import { theme } from 'theme'

interface TodoListItem {
    title: string
    desc: string
    done: boolean
    even: boolean
    onPress: () => void
}

const styles = StyleSheet.create({
    todoItem: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.lg
    },
    checkbox: {
        marginBottom: theme.spacing.xxs
    },
    checkboxTitle: {
        fontSize: theme.fontSize.lg,
        fontWeight: '500',
        color: theme.colors.darkGrey
    },
    even: {
        backgroundColor: theme.colors.pink
    },
    odd: {
        backgroundColor: theme.colors.white
    }
})

export const TodoListItem: React.FC<TodoListItem> = ({ title, desc, done, onPress, even }) => {
    const backgroundStyle = even ? styles.even : styles.odd
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.todoItem, backgroundStyle]}>
            <CheckBox
                style={styles.checkbox}
                isChecked={done}
                onClick={onPress}
                leftText={title}
                leftTextStyle={styles.checkboxTitle}
                checkBoxColor={theme.colors.mediumPurple}
            />
            <Typography size="sm">{desc}</Typography>
        </TouchableOpacity>
    )
}
