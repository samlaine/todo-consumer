/* eslint no-use-before-define: 0 */
import 'react-native-gesture-handler'
import * as React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, SafeAreaView } from 'react-native'

import { AppNavigation } from 'routing'
import { store } from 'state'

declare let global: { HermesInternal: null | {} }

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const App = () => {
    // TODO store auth_token into local storage and read and determine default route based on validity
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppNavigation />
            </SafeAreaView>
        </Provider>
    )
}

export default App
