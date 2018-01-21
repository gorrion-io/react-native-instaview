import { combineReducers } from 'redux'
import photos from './photos'
import selectedPhoto from './selectedPhoto'
import nav from './nav'
import dimensions from './dimensions'

const rootReducer = combineReducers({
    photos,
    selectedPhoto,
    nav,
    dimensions
})

export default rootReducer