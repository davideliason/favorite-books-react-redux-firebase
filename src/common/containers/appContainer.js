import App from '../../client/App.js';
import {connect} from 'react-redux';

function mapStateToProps(state){
	return {
		state: state
	}
}

export default connect(mapStateToProps)(App)