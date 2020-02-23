import * as React from 'react'
import { Text, TextProperties, StyleSheet } from 'react-native'
import { theme } from 'theme'

const styles = StyleSheet.create({
    xs: {
        fontSize: theme.fontSize.xs,
        color: theme.colors.darkGrey
    },
    sm: {
        fontSize: theme.fontSize.sm,
        color: theme.colors.darkGrey
    },
    md: {
        fontSize: theme.fontSize.md,
        color: theme.colors.darkGrey
    },
    lg: {
        fontSize: theme.fontSize.lg,
        color: theme.colors.darkGrey
    },
    xl: {
        fontSize: theme.fontSize.xl,
        color: theme.colors.darkGrey
    }
})

interface TextProps extends TextProperties {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Typography: React.FC<TextProps> = ({ children, size = 'md', style = {}, ...rest }) => (
    <Text style={[styles[size], style]} {...rest}>
        {children}
    </Text>
)
