let initialState = () => {

	return {

		flags : {
			newGame : false,
			gameLoaded : false,
			boardsFetched : false
		},
		currentGameBoard : [],
		newGameBoard : [],
		previousGameBoard : [],

	};
}

export default initialState ();