import React from 'react';
import { Provider } from 'react-redux'
import { Text } from 'react-native'

import configureStore from './store'

import Main from './containers/Main'

const store = configureStore()



export default () => (
    <Provider store={store}>
        <Main />
    </Provider>
)
