import React from 'react'
import { Text, View, BackHandler } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'

import AppNavigator from './AppNavigator'


export default class Main extends React.Component { 
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props
        if (nav.index === 0)
            return false

        dispatch(NavigationActions.back())
        return true
    }

    render() {
        return <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })} />
    }

}