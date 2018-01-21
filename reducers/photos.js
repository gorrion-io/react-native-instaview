import { FETCHING_PHOTOS, FETCHING_PHOTOS_SUCCESS, FETCHING_PHOTOS_FAILURE } from '../constants'


export default function photosReducer(state = [], action) {
    switch(action.type) {
        case FETCHING_PHOTOS_SUCCESS:
            return action.payload
        default:
            return state
    }
}