import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('SolverComponent', theme => ({
	root : {
		position : 'fixed',
		bottom : 0,
		top : 0
	},
	sudokuContainer : {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		paddingTop : '10px',
		paddingBottom : '10px'
	},
	bottomContainer : {
		position : 'absolute',
		bottom : 0,
		width : '100%'
	},
	submitButton : {
		width : '100%'
	},
	helperText : {
		wordWrap: 'break-word',
	    padding: '10px',
	    width: '90%',
	},
	inputSudokuString : {
		width : '100%',
		marginBottom : '10px'
	},
	grey : {
		color : '#666'
	},
	errorMessage : {
		color : 'red'
	}
}));

export default styleSheet;