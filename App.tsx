/* eslint no-use-before-define: 0 */
import 'react-native-gesture-handler'
import * as React from 'react'
import { Provider } from 'react-redux'

import { AppNavigation } from 'routing'
import { store } from 'state'

declare let global: { HermesInternal: null | {} }

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}

export default App
