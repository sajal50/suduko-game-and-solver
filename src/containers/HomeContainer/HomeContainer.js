import {connect} from 'react-redux';
import HomeComponent from '../../components/HomeComponent/HomeComponent.js';
import { setFlags } from '../../actions/flagActions.js';
const mapStateToProps = (state) => {

	return {
	

	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		setFlags : (obj) => {
			dispatch(setFlags(obj));
		}
	};

};


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
