import { StackNavigator } from 'react-navigation'

import PhotosList from '../containers/PhotosList'
import PhotoDetails from '../containers/PhotoDetails'

const commonOptions = {
    headerStyle: {
        backgroundColor: '#338833',
    },
    headerTintColor: '#ffffff',
}

export default StackNavigator({
    PhotosList: {
        screen: PhotosList,
        navigationOptions: {
            title: "Photos List",
            ...commonOptions
        }
    },
    PhotoDetails: {
        screen: PhotoDetails,
        navigationOptions: {
            title: "Photo Details",
            ...commonOptions
        }
    }
});