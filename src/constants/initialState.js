let initialState = () => {

	return {

		flags : {
			newGame : true,
			gameLoaded : false
		},
		currentGameBoard : [],
		newGameBoard : [],
		previousGameBoard : [],

	};
}

export default initialState ();