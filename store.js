import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import thunk from 'redux-thunk'

export default () => createStore(app, applyMiddleware(thunk))