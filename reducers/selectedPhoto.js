import { PHOTO_SELECTED, PHOTO_DESELECTED } from '../constants'

export default function selectedPhotoReducer(state = null, action) {
    switch(action.type) {
        case PHOTO_SELECTED: 
            return action.payload
        default:
            return state
    }
}