import {connect} from 'react-redux';
import BaseComponent from '../../components/BaseComponent/BaseComponent.js';
import { fetchNewGame, fetchPreviousGameIfAny } from '../../actions/initialLoadingActions.js';


const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {

	return {

		fetchNewGame : () => {
			dispatch (fetchNewGame())
		},
		fetchPreviousGameIfAny : () => {
			dispatch (fetchPreviousGameIfAny())
		}
	};

};


export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);
