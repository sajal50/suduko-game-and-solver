import initialState from '../../constants/initialState.js';
import actionConstants from '../../constants/actionConstants';
import _ from 'lodash';



const currentGameBoard = (state = initialState.currentGameBoard, action) => {

	switch (action.type) {
		case actionConstants.SET_CURRENT_GAME_BOARD : 
			return setCurrentGameBoard (action.board);
		case actionConstants.UPDATE_CURRENT_GAME_BOARD : 
			return updateCurrentGameBoard (action.payload, state);
		default: 
		return state
	}



};

function setCurrentGameBoard (board) {
	return [...board];
}

function updateCurrentGameBoard (payload, state) {
	const {index, value} = payload;
	return state.map ((singleCube) => {
		if (singleCube.index === index) {
			return {...singleCube, value};
		} else {
			return singleCube;
		}
	});
}

export default currentGameBoard;