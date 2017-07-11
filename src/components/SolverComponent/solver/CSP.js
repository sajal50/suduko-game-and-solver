class CSP {

	constructor (sudokuString) {
		this.boxIdentity = {
		'A1':1,'A2':1,'A3':1,'A4':2,'A5':2,'A6':2,'A7':3,'A8':3,'A9':3,'B1':1,'B2':1,'B3':1,'B4':2,'B5':2,'B6':2,'B7':3,'B8':3,'B9':3,'C1':1,'C2':1,'C3':1,'C4':2,'C5':2,'C6':2,'C7':3,'C8':3,'C9':3,'D1':4,'D2':4,'D3':4,'D4':5,'D5':5,'D6':5,'D7':6,'D8':6,'D9':6,'E1':4,'E2':4,'E3':4,'E4':5,'E5':5,'E6':5,'E7':6,'E8':6,'E9':6,'F1':4,'F2':4,'F3':4,'F4':5,'F5':5,'F6':5,'F7':6,'F8':6,'F9':6,'G1':7,'G2':7,'G3':7,'G4':8,'G5':8,'G6':8,'G7':9,'G8':9,'G9':9,'H1':7,'H2':7,'H3':7,'H4':8,'H5':8,'H6':8,'H7':9,'H8':9,'H9':9,'I1':7,'I2':7,'I3':7,'I4':8,'I5':8,'I6':8,'I7':9,'I8':9,'I9':9
		}
		this.boxStart = {1:'A1', 2 : 'A4' , 3 : 'A7', 4 : 'D1', 5 : 'D4', 6: 'D7', 7: 'G1', 8: 'G4', 9 : 'G7'}
		this.csp = {}
		this.assignVariablesDomains(sudokuString)
		this.setNeighbors()
		this.setDomainLength ()
	}
 	setDomainLength () {
		for ( let key in this.csp ) {
			this.csp[key]['domainLength'] = this.csp[key]['domain'].size;
		}
 	}
 	assignVariablesDomains (sudokuString) {
 		sudokuString = sudokuString.split("");
 		sudokuString.map ((char,i) => {

 			char = +char
			let pos = String.fromCharCode('A'.charCodeAt(0) + i/9) + ((i%9) + 1)

			this.csp [pos] = {}
			if (char == 0){
				this.csp[pos]['domain'] = new Set ([1,2,3,4,5,6,7,8,9])
			} else {
				this.csp[pos]['domain'] = new Set ([char])
			}

 		});
 	}
 	setNeighbors() {
 		for ( let key in this.csp ) {
 			this.csp [key]['neighbors'] = new Set ([])
			this.setRowNeighbors (key)
			this.setColNeighbors (key)
			this.setBoxNeighbors (key)

 		}
 	}
 	setRowNeighbors (key) {
 		let {row, col} = this.getIdentity(key)

		for (let i = 1; i <= 9; i ++ ) {
			if ( key != row + i ) {
				let neighborSet = this.csp [key]['neighbors']
				neighborSet.add(row+i)

			}
		}

 	}
	setColNeighbors (key) {
		let {row, col} = this.getIdentity(key)
		for (let i = 0; i <= 8; i ++ ) {
			if  (key != String.fromCharCode ('A'.charCodeAt(0) + i )+ col ) {
				let neighborSet = this.csp [key]['neighbors']
				neighborSet.add(String.fromCharCode ('A'.charCodeAt(0) + i )+ col)

			}

		}

	}
	setBoxNeighbors (key) {
		let startBoxKey = this.boxStart[this.boxIdentity[key]]
		let {row, col} = this.getIdentity (startBoxKey)
		col = +col
		for (let i = 0; i<=2 ; i++) {
			for (let j = col; j<= col+2 ; j ++) {

				let neighborSet = this.csp [key]['neighbors']
				
				if (key != String.fromCharCode(row.charCodeAt(0) + i ) + j){
					neighborSet.add(String.fromCharCode(row.charCodeAt(0) + i ) + j)
				}
			}
		}

	}

	getIdentity (key) {
		let keyList = key.split("")
		let row = keyList[0]
		let col = keyList[1]
		return {row, col}
	}



}

module.exports = {
	CSP
};