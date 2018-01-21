import { FETCHING_PHOTOS, FETCHING_PHOTOS_SUCCESS, FETCHING_PHOTOS_FAILURE } from '../constants'

const initialState = {
    photos: [],
    loading: false,
    error: null
}

export default function photosReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_PHOTOS: 
            return { ...state, loading: true }
        case FETCHING_PHOTOS_SUCCESS:
            return { ...state, loading: false, photos: action.payload }
        case FETCHING_PHOTOS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}