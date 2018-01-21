import { connect } from 'react-redux' 
import Main from '../components/Main'
import { dimensionsChanged } from '../actions' 
import { bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
    return { dispatch, ...bindActionCreators({ dimensionsChanged }, dispatch) }
}

function mapStateToProps({selectedPhoto, nav}) {
    return { selectedPhoto, nav }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)