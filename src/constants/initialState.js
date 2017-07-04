let initialState = () => {

	return {

		flags : {
			newGame : false,
			gameLoaded : false
		},
		currentGameBoard : [],
		newGameBoard : [],
		previousGameBoard : [],

	};
}

export default initialState ();