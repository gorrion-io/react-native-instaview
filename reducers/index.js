import { combineReducers } from 'redux'
import photos from './photos'
import selectedPhoto from './selectedPhoto'
import nav from './nav'


const rootReducer = combineReducers({
    photos,
    selectedPhoto,
    nav
})

export default rootReducer