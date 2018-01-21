import { connect } from 'react-redux' 
import Main from '../components/Main'

function mapStateToProps({selectedPhoto, nav}) {
    return { selectedPhoto, nav }
}

export default connect(mapStateToProps)(Main)