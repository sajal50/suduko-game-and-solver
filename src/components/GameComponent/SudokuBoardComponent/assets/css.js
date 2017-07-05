import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('SudokuBoardComponent', theme => ({
	singleCube : {
		cursor : 'pointer',
		padding : '5px',
		margin : '0 auto',
		textAlign : 'center',
		border : '0.5px solid black',
		fontWeight : 'bold',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		color : '#DDD'
	},
	hidden : {
		visibility : 'hidden'
	},
	fixed : {
		backgroundColor : 'brown',
		color : '#FFF'
	},
	selected : {
		backgroundColor : '#4e1b89'
	},
	outerBorderLeft : {
		borderLeft : '4px solid black'
	},
	outerBorderRight : {
		borderRight : '4px solid black'
	},
	outerBorderTop : {
		borderTop : '4px solid black'
	},
	outerBorderBottom : {
		borderBottom : '4px solid black'
	},
	innerBoxLeft : {
		borderLeft : '3px solid black'
	},
	innerBoxRight : {
		borderRight : '3px solid black'
	},
	innerBoxTop : {
		borderTop : '3px solid black'
	},
	innerBoxBottom : {
		borderBottom : '3px solid black'
	}

}));

export default styleSheet;