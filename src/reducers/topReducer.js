import {combineReducers} from 'redux';
import flags from './flags/flags.js';
import newGameBoard from './newGameBoard/newGameBoard.js';
import previousGameBoard from './previousGameBoard/previousGameBoard.js';
import currentGameBoard from './currentGameBoard/currentGameBoard.js';

export default combineReducers({
	flags,
	newGameBoard,
	previousGameBoard,
	currentGameBoard
});


