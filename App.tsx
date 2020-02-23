/* eslint no-use-before-define: 0 */
import 'react-native-gesture-handler'

import * as React from 'react'
import { AppNavigation } from 'routing'

declare let global: { HermesInternal: null | {} }

const App = () => {
    return <AppNavigation />
}

export default App
