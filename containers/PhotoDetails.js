import { connect } from 'react-redux'
import { deselectPhoto } from '../actions'
import PhotoDetails from '../components/PhotoDetails'

function mapStateToProps({selectedPhoto}) {
    return { photo: selectedPhoto }
}

export default connect(mapStateToProps, { deselectPhoto })(PhotoDetails)