import {connect} from 'react-redux';
import GameComponent from '../../components/GameComponent/GameComponent.js';
import { getNewGame, updateCurrentGameBoard, getPreviousGameBoard } from '../../actions/initialLoadingActions.js';
const mapStateToProps = (state) => {

	return {
		flags : {...state.flags},
		currentGameBoard : [...state.currentGameBoard]
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getNewGame : () => {
			dispatch (getNewGame());
		},
		updateCurrentGameBoard : (index, value) => {
			dispatch (updateCurrentGameBoard(index, value));
		},
		getPreviousGameBoard : () => {
			dispatch (getPreviousGameBoard());
		}
 	};

};

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
