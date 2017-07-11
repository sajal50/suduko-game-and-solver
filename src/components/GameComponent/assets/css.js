import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('GameComponent', theme => ({
	root : {
		position : 'fixed',
		bottom : 0,
		top : 0
	},
	sudokuContainer : {
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
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
	}
}));

export default styleSheet;