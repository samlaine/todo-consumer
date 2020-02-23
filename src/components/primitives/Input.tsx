import * as React from 'react'
import { TextInput, TextInputProperties, StyleSheet, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import { theme } from 'theme'

const styles = StyleSheet.create({
    input: {
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.sm,
        paddingVertical: theme.spacing.md
    },
    focused: {
        borderRadius: 4,
        borderColor: theme.colors.mediumPurple,
        borderWidth: 1
    }
})

interface InputProps extends TextInputProperties {
    placeholderColor: ''
}

export const Input: React.FC<TextInputProperties> = ({ style, onFocus, onBlur, ...rest }) => {
    const [focused, toggleFocus] = React.useState(false)
    const focusStyle = focused ? styles.focused : {}

    const onInputFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        toggleFocus(true)
        if (onFocus) {
            onFocus(e)
        }
    }
    const onInputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        toggleFocus(false)
        if (onBlur) {
            onBlur(e)
        }
    }

    return <TextInput onFocus={onInputFocus} onBlur={onInputBlur} style={[styles.input, focusStyle, style]} {...rest} />
}
