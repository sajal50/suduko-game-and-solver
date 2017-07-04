import urlConstants from '../constants/urlConstants.js';
import actionConstants from '../constants/actionConstants.js';
import * as localforage from 'localforage';
import {setFlags} from './flagActions.js';

const options = {
	headers :  {
		'Content-Type': 'application/json'
	}
};

const randomIntFromInterval = (min,max) => {
	return Math.floor(Math.random()*(max-min+1)+min);
};

const parseBaord = (boardString) => {
	return boardString.split("").map ((singleValue, index) => {
		return {
			value : +singleValue,
			index,
			fixed : (+singleValue) ? true : false
		};
	});
};

const setNewGameBoard = (board) => {
	return {
		type : actionConstants.SET_NEW_GAME_BOARD,
		board
	};
}


const setCurrentBoard = (board) => {
	return {
		type : actionConstants.SET_CURRENT_GAME_BOARD,
		board
	};
}

const _fetchNewGameFromNetwork = () => {
	const p = new Promise ((resolve, reject) => {
		fetch (urlConstants.board,options)
		.then ((response) =>  response.json ())
		.then ((json) => {
			resolve(parseBaord(json[randomIntFromInterval(1,json.length-1)]));
		})
		.catch ((err) => {
			reject (err);
		})
	});

	return p;
}
export function fetchNewGame () {

	return (dispatch, getState) => {

		_fetchNewGameFromNetwork ()
		.then ((board) => dispatch((setNewGameBoard(board))))
		.catch ((err) => {
			console.log (err);
		});
		
	};
}


const _updateLocalStoragePreviousGameBoard = (board) => {
	localforage.setItem ('previousGameBoard', board)
	.then (() => console.log ('saved'))
	.catch (() => console.log ('error saving'));

}
export function getNewGame () {
	return (dispatch, getState) => {
		const newGameBoard = getState().newGameBoard;

		if ( newGameBoard && newGameBoard.length) {

			dispatch (setCurrentBoard(newGameBoard));
			dispatch (setFlags ({gameLoaded:true}));
			dispatch (fetchNewGame());
			_updateLocalStoragePreviousGameBoard (getState().currentGameBoard);


		} else {
			_fetchNewGameFromNetwork ()
			.then ((board) => {
				dispatch (setCurrentBoard(board));
				dispatch (setFlags ({gameLoaded:true}));
				dispatch (fetchNewGame());
				_updateLocalStoragePreviousGameBoard (getState().currentGameBoard);
			})
			.catch ((err) => {
				console.log (err);
			})
		}


	};
}
export function updateCurrentGameBoard (index, value) {
	return (dispatch, getState) => {
		dispatch ({
			type : actionConstants.UPDATE_CURRENT_GAME_BOARD,
			payload : {
				index,
				value
			}
		});
		_updateLocalStoragePreviousGameBoard (getState().currentGameBoard);
	};
}

export function getPreviousGameBoard () {
	return (dispatch, getState) => {

		localforage.getItem ('previousGameBoard')
		.then ((previousGameBoard) => {
			if (previousGameBoard && previousGameBoard.length) {
		
				dispatch (setCurrentBoard(previousGameBoard));
				dispatch (setFlags ({gameLoaded:true}));
		
			} else {
				throw new Error ('No previousGameBoard found');
			}
		});
	}
}