import { connect } from 'react-redux'
import { fetchPhotos, selectPhoto } from '../actions'
import PhotosList from '../components/PhotosList'

function mapStateToProps(state) {
    return state.photos
}

export default connect(mapStateToProps, { fetchPhotos, selectPhoto })(PhotosList)