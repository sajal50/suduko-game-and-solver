import initialState from '../../constants/initialState.js';
import actionConstants from '../../constants/actionConstants';
import _ from 'lodash';



const previousGameBoard = (state = initialState.previousGameBoard, action) => {

	switch (action.type) {
		case actionConstants.SET_PREVIOUS_GAME_BOARD : 
			return setPreviousGameBoard (action.board);
		default: 
		return state
	}



};

function setPreviousGameBoard (board) {
	return [...board];
}

export default previousGameBoard;