import { NavigationActions } from 'react-navigation'

import { FETCHING_PHOTOS, FETCHING_PHOTOS_SUCCESS, FETCHING_PHOTOS_FAILURE, PHOTO_SELECTED, PHOTO_DESELECTED } from './constants'
import * as api from './api.js'


function fetchingPhotos() {
    return { type: FETCHING_PHOTOS }
}

function fetchingPhotosSuccess(photos) {
    return { type: FETCHING_PHOTOS_SUCCESS, payload: photos }
}

function fetchingPhotosFailure(error) {
    return { type: FETCHING_PHOTOS_FAILURE, payload: error }
}

export function fetchPhotos() {
    return async (dispatch) => {
        dispatch(fetchingPhotos())
        try {
            const photos = await api.fetchPhotos()
            dispatch(fetchingPhotosSuccess(photos))
        }
        catch(error) {
            alert(error)
            console.log(error)
            dispatch(fetchingPhotosFailure(error))
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

export function deselectPhoto() {
    return (dispatch) => {
        dispatch(NavigationActions.navigate({ routeName: 'PhotosList' }))
        dispatch({
            type: PHOTO_DESELECTED
        })
    }
}