import * as _ from 'lodash';

const _areChunksValid = (chunkedBoard) => { 
	for (let strip of chunkedBoard) {
		let hash = {};
		for (let num of strip) {
			if (hash[num]) {
				console.log ('here');
				return false;

			} else {
				hash[num] = true;
			}
		}
	}
	return true;
};

const _chunkBoardAccordingToColumns = (board) => {
	let chunkedBoard = [[],[],[],[],[],[],[],[],[]];
	board.map ((singleValue, index) => {
		 chunkedBoard[index%9].push (singleValue);
	});
	return chunkedBoard;
};


const _chunkBoardAccordingToBoxes = (board) => {
	let chunkedBoard = [[],[],[],[],[],[],[],[],[]];

	let rowChunkedBoard = _.chunk (board, 9);

	for (let i = 0; i<9; i++) {
		for (let j = 0; j<9; j++) {
			chunkedBoard[ _.intersection (possibleBoxesRows[i], possibleBoxesColumns[j])[0] ].push(rowChunkedBoard[i][j])
		}
	}
	return chunkedBoard;
}

const possibleBoxesColumns = {
	0 : [0,3,6],
	1 : [0,3,6],
	2 : [0,3,6],
	3 : [1,4,7],
	4 : [1,4,7],
	5 : [1,4,7],
	6 : [2,5,8],
	7 : [2,5,8],
	8 : [2,5,8],
};

const possibleBoxesRows = {
	0 : [0,1,2],
	1 : [0,1,2],
	2 : [0,1,2],
	3 : [3,4,5],
	4 : [3,4,5],
	5 : [3,4,5],
	6 : [6,7,8],
	7 : [6,7,8],
	8 : [6,7,8],
};
export default function isValidSudokuSolution (board) {
	if ( board.indexOf (0) > -1 ) {
		return false
	}

	let rowChunkedBoard = _.chunk (board, 9);
	if (!_areChunksValid (rowChunkedBoard)) {
		return false; 
	}

	let columnChunkedBoard = _chunkBoardAccordingToColumns (board);
	if (!_areChunksValid(columnChunkedBoard)) {
		return false;
	}

	let boxChunkedBoard = _chunkBoardAccordingToBoxes (board);
	if (!_areChunksValid(boxChunkedBoard)) {
		return false
	}
	return true;
}

