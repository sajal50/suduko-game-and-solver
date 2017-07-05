import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('GameComponent', theme => ({
	root : {
		position : 'fixed',
		bottom : 0,
		top : 0
	},
	sudokuContainer : {
		backgroundColor: 'rgba(255, 255, 255, 0.6)'
	},
	bottomContainer : {
		position : 'absolute',
		bottom : 0,
		width : '100%',
		borderTop : 'solid 3px #916c2d'
	}
}));

export default styleSheet;