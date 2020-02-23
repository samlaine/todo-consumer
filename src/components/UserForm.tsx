import * as React from 'react'
import { View } from 'react-native'
import { Input, Button } from 'components/primitives'

interface UserFormProps {
    submitAction: string
    onSubmit: () => void
    email: string
    onEmailChange: (text: string) => void
    password: string
    onPasswordChange: (text: string) => void
}

export const UserForm: React.FC<UserFormProps> = ({
    email,
    onEmailChange,
    password,
    onPasswordChange,
    submitAction,
    onSubmit
}) => {
    return (
        <View>
            <Input
                placeholder="email"
                autoCapitalize="none"
                value={email}
                onChangeText={onEmailChange}
                textContentType="emailAddress"
            />
            <Input
                placeholder="password"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={onPasswordChange}
                textContentType="password"
            />
            <Button label={submitAction} variant="secondary" onPress={onSubmit} />
        </View>
    )
}
