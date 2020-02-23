import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { RouteNames } from 'types/routing'
import { routes } from './routes'

const Stack = createStackNavigator()

interface Props {
    initialRouteName?: RouteNames
}

export const AppNavigation: React.FC<Props> = ({ initialRouteName = RouteNames.LOGIN }) => {
    const generateAppRoutes = () => {
        return routes.map(route => (
            <Stack.Screen name={route.name} component={route.component} options={route.options} />
        ))
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>{generateAppRoutes()}</Stack.Navigator>
        </NavigationContainer>
    )
}
