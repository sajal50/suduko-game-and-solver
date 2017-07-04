import initialState from '../../constants/initialState.js';
import actionConstants from '../../constants/actionConstants';
import _ from 'lodash';



const newGameBoard = (state = initialState.newGameBoard, action) => {

	switch (action.type) {
		case actionConstants.SET_NEW_GAME_BOARD : 
			return setNewGameBoard (action.board);
		default: 
		return state
	}



};

function setNewGameBoard (board) {
	return [...board];
}
export default newGameBoard;