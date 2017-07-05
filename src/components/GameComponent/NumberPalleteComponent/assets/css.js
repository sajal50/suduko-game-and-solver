import { createStyleSheet } from 'material-ui/styles';
const styleSheet = createStyleSheet('NumberPalleteComponent', theme => ({
	root : {
		margin : 0
	},
	number : {
		cursor : 'pointer',
		border: '2px solid #000',
    	margin: '2px',
    	textAlign: 'center',
    	backgroundColor: 'rgba(0,0,0,0.7)',
    	fontWeight: 'bold',
    	color: '#DDD'
	}

}));

export default styleSheet;