import { NavigationActions } from 'react-navigation'

import { FETCHING_PHOTOS, FETCHING_PHOTOS_SUCCESS, FETCHING_PHOTOS_FAILURE, PHOTO_SELECTED, PHOTO_DESELECTED, DIMENSIONS_CHANGED } from './constants'
import * as api from './api.js'


export function fetchPhotos() {
    return async (dispatch) => {
        try {
            const photos = await api.fetchPhotos()
            dispatch({type: FETCHING_PHOTOS_SUCCESS, payload: photos })
        }
        catch(error) {
            alert(error)
        }
    } 
}

export function selectPhoto(photo) {
    return (dispatch) => {
        dispatch({
            type: PHOTO_SELECTED,
            payload: photo
        })
        dispatch(NavigationActions.navigate({ routeName: 'PhotoDetails' }))
    }
}

export function backToList() {
    return NavigationActions.navigate({ routeName: 'PhotosList' })
}

export function dimensionsChanged() {
    return { type: DIMENSIONS_CHANGED }
}