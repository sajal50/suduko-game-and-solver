import React, { Component } from 'react';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router-dom';
import * as localforage from 'localforage';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styleSheet from './assets/css.js';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

class HomeComponent extends Component {
	constructor (props) {
		super (props);
		this.newGameClickHandler = this.newGameClickHandler.bind(this);
		this.resumeGameClickHandler = this.resumeGameClickHandler.bind(this);
		this.solveClickHandler = this.solveClickHandler.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.state = {
			isPreviousGameBoardAvailable : false,
			showNotif : false
		};
	}
	componentWillMount () {
		localforage.getItem ('previousGameBoard')
		.then ((previousGameBoard) => {
			if (previousGameBoard && previousGameBoard.length) {
				this.setState({isPreviousGameBoardAvailable:true});
			}
		});
	}
	newGameClickHandler () {
		this.props.setFlags ({newGame : true});
		this.props.history.push('/game');
	}
	resumeGameClickHandler () {
		this.props.setFlags ({newGame : false});
		this.props.history.push('/game');
	}
	solveClickHandler () {
		this.props.history.push('/solve');
	}
	handleRequestClose () {
		this.setState({showNotif:false});
	}
	componentWillReceiveProps (nextProps) {
		if (nextProps.boardsFetched !== this.props.boardsFetched) {
			this.setState({showNotif : true});
		}
	}
	render() {
		const {isPreviousGameBoardAvailable} = this.state;
		const {classes} = this.props;

		return (
			<Grid className = {classes.root} container justify = 'center'>
				<Grid item xs = {10} sm = {8} md = {6}>
					<Paper elevation = {4} className = {classes.paperContainer} >
						<h3 className = {classes.heading}> Sudoku </h3>
						<h4 className = {classes.heading}> Play and Solve </h4>
						<Button className = {classes.buttons} 
							onClick = {this.newGameClickHandler} 
							raised 
							color = 'primary'>
							New Game!
						</Button>
						{
							(isPreviousGameBoardAvailable) ?
							<Button className = {classes.buttons}
								raised color = 'primary' onClick = {this.resumeGameClickHandler}>
								Resume
							</Button>
							:
							null
						}
						<Button className = {classes.buttons}
							raised color = 'accent' onClick = {this.solveClickHandler} >
							Solver
						</Button>
					</Paper>
				</Grid>
				<Snackbar
					anchorOrigin={{
			            vertical: 'bottom',
			            horizontal: 'left',
			        }}
					open={this.state.showNotif}
					onRequestClose={this.handleRequestClose}
					SnackbarContentProps={{
					'aria-describedby': 'message-id',
					}}
					message={
						<span id="message-id">This app is now available offline. No, really. Turn off the internet and refresh!
						</span>
					}
					action={[
			            <IconButton
			              key="close"
			              aria-label="Close"
			              color="inherit"
			              
			            >
			            	<CloseIcon onClick={this.handleRequestClose} />
			            </IconButton>,
			        ]}
		        />
			</Grid>
		);
	}
}

export default withRouter(withStyles(styleSheet)(HomeComponent));