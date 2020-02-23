import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Typography } from 'components/primitives'
import { UserForm } from 'components'

import { useDispatch, useSelector } from 'state'
import { login } from 'state/auth'

import { theme } from 'theme'
import { RouteNames } from 'types/routing'

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

interface LoginProps {
    navigation: StackNavigationProp<any, 'Login'>
}

export const Login: React.FC<LoginProps> = ({ navigation }) => {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.authState.accessToken)
    const [emailInput, setEmail] = React.useState('')
    const [pwInput, setPassword] = React.useState('')

    React.useEffect(() => {
        if (accessToken) {
            navigation.replace(RouteNames.TODO_LIST)
        }
    }, [accessToken, navigation])

    const navigateToCreateAccount = () => {
        navigation.navigate(RouteNames.USER_CREATE)
    }

    const submitLogin = () => {
        dispatch(login(emailInput, pwInput))
    }

    return (
        <View style={[styles.container]}>
            <UserForm
                email={emailInput}
                onEmailChange={setEmail}
                password={pwInput}
                onPasswordChange={setPassword}
                submitAction="Login"
                onSubmit={submitLogin}
            />

            <Typography size="xs">
                Not a member yet?{' '}
                <Typography size="sm" onPress={navigateToCreateAccount} style={styles.interactableText}>
                    Create account
                </Typography>{' '}
                from here.
            </Typography>
        </View>
    )
}
