import { connect } from 'react-redux'
import { fetchPhotos, selectPhoto } from '../actions'
import PhotosList from '../components/PhotosList'

function mapStateToProps({ photos, dimensions }) {
    const { orientation } = dimensions
    return { photos, orientation }
}

export default connect(mapStateToProps, { fetchPhotos, selectPhoto })(PhotosList)