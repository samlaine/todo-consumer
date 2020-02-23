import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProperties } from 'react-native'
import { theme } from 'theme'

interface IButtonProps extends TouchableOpacityProperties {
    variant?: 'primary' | 'secondary' | 'nude'
    children?: React.ReactChild
    label: string
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: theme.spacing.xxs,
        padding: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        width: '100%',
        borderRadius: 4
    },
    primary: {
        backgroundColor: theme.colors.pink,
        color: theme.colors.darkGrey
    },
    secondary: {
        backgroundColor: theme.colors.neutralGrey,
        color: theme.colors.pink
    },
    nude: {
        backgroundColor: 'transparent',
        color: theme.colors.mediumPurple
    },
    label: {
        display: 'flex',
        fontFamily: 'System',
        fontSize: theme.fontSize.md,
        fontWeight: '500'
    }
})

export const Button: React.FC<IButtonProps> = ({ variant = 'primary', label, children, ...rest }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.button, styles[variant]]} {...rest}>
            {children}
            <Text style={[styles.label, styles[variant]]}>{label}</Text>
        </TouchableOpacity>
    )
}
