import { connect } from 'react-redux'
import { backToList } from '../actions'
import PhotoDetails from '../components/PhotoDetails'

function mapStateToProps({selectedPhoto, dimensions}) {
    const { height } = dimensions
    return { photo: selectedPhoto, dimensions: { height } }
}

export default connect(mapStateToProps, { backToList })(PhotoDetails)