import * as React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Typography } from 'components/primitives'
import { theme } from 'theme'
import { useDispatch, useSelector } from 'state'
import { register } from 'state/auth'
import { UserForm } from 'components'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.lg
    },
    interactableText: {
        color: theme.colors.mediumPurple,
        fontWeight: '500'
    }
})

interface CreateUserProps {
    navigation: StackNavigationProp<any, 'Login'>
}

export const CreateUser: React.FC<CreateUserProps> = ({ navigation }) => {
    const dispatch = useDispatch()
    const userCreated = useSelector(state => state.authState.userCreated)
    const [formSent, setFormSent] = React.useState(false)
    const [emailInput, setEmail] = React.useState({ value: '', isValid: false })
    const [pwInput, setPassword] = React.useState({ value: '', isValid: false })

    React.useEffect(() => {
        if (formSent && userCreated) {
            navigation.pop()
        }
    }, [userCreated, formSent, navigation])

    const onSetEmail = (text: string): void => {
        const isValid = text.includes('@') && text.includes('.') // hack "validation"
        setEmail({ value: text, isValid })
    }

    const onSetPassword = (text: string): void => {
        const isValid = text.length > 3 // hack "validation"
        setPassword({ value: text, isValid })
    }

    const navigateBack = () => {
        navigation.pop()
    }

    const submitRegister = () => {
        if (!emailInput.isValid) {
            Alert.alert('Creating user failed', 'Email is not in valid format')
            return
        }
        if (!pwInput.isValid) {
            Alert.alert('Creating user failed', 'Password is not strong enough.')
            return
        }
        setFormSent(true)
        dispatch(register(emailInput.value, pwInput.value))
    }

    return (
        <View style={[styles.container]}>
            <UserForm
                email={emailInput.value}
                onEmailChange={onSetEmail}
                password={pwInput.value}
                onPasswordChange={onSetPassword}
                submitAction="Register user"
                onSubmit={submitRegister}
            />

            <Typography size="xs">
                Already got account?{' '}
                <Typography size="sm" onPress={navigateBack} style={styles.interactableText}>
                    Login
                </Typography>{' '}
                from here.
            </Typography>
        </View>
    )
}
