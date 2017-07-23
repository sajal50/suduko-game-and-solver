import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('HomeComponent', theme => ({
	root : {
		'margin' : '0',
		'width' : '100%'
	},
	buttons : {
		width : '100%',
		'marginTop' : '10px',
		'marginBottom' : '10px',
		'opacity' : '1'
	},
	paperContainer : {
		'padding' : '50px',
		'marginTop' : '40px',
		'backgroundColor': 'rgba(0,0,0,0.8)',
		'textAlign' : 'center'
	},
	heading : {
		color : '#FFF'
	}
}));

export default styleSheet;