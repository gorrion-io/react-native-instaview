import { Dimensions } from 'react-native'
import { DIMENSIONS_CHANGED } from '../constants';


const getOrientation = ({width, height}) => {
    return width > height ? 'landscape' : 'portrait'
}

const makeState = (dimensions) => ({
    orientation: getOrientation(dimensions),
    width: dimensions.width,
    height: dimensions.height
})

const initialState = makeState(Dimensions.get('window'))

export default function dimensionsReducer(state = initialState, action) {
    switch(action.type) {
        case DIMENSIONS_CHANGED:
            return makeState(Dimensions.get('window'))
        default:
            return state
    }
}