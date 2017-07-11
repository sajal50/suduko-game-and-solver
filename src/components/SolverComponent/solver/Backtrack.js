class Backtrack {

	constructor(csp) {
		this.assignment = {

			'A1':false,'A2':false,'A3':false,'A4':false,'A5':false,'A6':false,'A7':false,'A8':false,'A9':false,'B1':false,'B2':false,'B3':false,'B4':false,'B5':false,'B6':false,'B7':false,'B8':false,'B9':false,'C1':false,'C2':false,'C3':false,'C4':false,'C5':false,'C6':false,'C7':false,'C8':false,'C9':false,'D1':false,'D2':false,'D3':false,'D4':false,'D5':false,'D6':false,'D7':false,'D8':false,'D9':false,'E1':false,'E2':false,'E3':false,'E4':false,'E5':false,'E6':false,'E7':false,'E8':false,'E9':false,'F1':false,'F2':false,'F3':false,'F4':false,'F5':false,'F6':false,'F7':false,'F8':false,'F9':false,'G1':false,'G2':false,'G3':false,'G4':false,'G5':false,'G6':false,'G7':false,'G8':false,'G9':false,'H1':false,'H2':false,'H3':false,'H4':false,'H5':false,'H6':false,'H7':false,'H8':false,'H9':false,'I1':false,'I2':false,'I3':false,'I4':false,'I5':false,'I6':false,'I7':false,'I8':false, 'I9':false
		}

		for (let key in csp ){
			if (csp[key]['domainLength'] == 1) {
				this.assignment [key] = Array.from(csp[key]['domain'])[0]
			}
		}

	}

	isComplete () {
		for (let key in this.assignment ){
		
			if (!this.assignment[key]) {
				return false
			}
		
		}
		return true

	}


	algo (csp) {
		if (this.isComplete()) {
			return this.assignment
		}

		let nextAssignmentVariable = this.selectNextAssignmentVariable (csp)
		let oldDomain = csp[nextAssignmentVariable]['domain']

		for (let domainValue of oldDomain) {
			csp[nextAssignmentVariable]['domain'] = new Set ([domainValue])
			csp[nextAssignmentVariable]['domainLength'] = 1
			
			this.assignment[nextAssignmentVariable] = domainValue



			if (this.isConsistent (csp, nextAssignmentVariable) ) {
				
				let theseKeysGotReduced = this.getInferences (csp , nextAssignmentVariable)
				if (theseKeysGotReduced !== false) {

					let result = this.algo (csp)
					if (result) {
						return result
					}

					theseKeysGotReduced.map ((key) => {
						csp[key]['domain'].add(domainValue)
						csp[key]['domainLength'] +=1
					});

				}
			}
		}

		csp[nextAssignmentVariable]['domain'] = oldDomain
		csp[nextAssignmentVariable]['domainLength'] = oldDomain.size
		this.assignment[nextAssignmentVariable] = false
		return false
	}


	getInferences (csp, nextAssignmentVariable) {
		let theseToBeReturned = []
		let valueToBeRemoved = Array.from(csp [nextAssignmentVariable]['domain'])[0]
		for (let neighbor of csp[nextAssignmentVariable]['neighbors']){
			let domain = csp[neighbor]['domain']
			
			if (domain.has(valueToBeRemoved)) {
				theseToBeReturned.push(neighbor)

				domain.delete(valueToBeRemoved)
				csp[neighbor]['domainLength'] -= 1
				if (csp[neighbor]['domainLength'] == 0) {
					return false
				}

			}

		}
		return theseToBeReturned
	}

	isConsistent (csp, variable) {
		for (let neighbor of csp [variable]['neighbors']) {
			if (!this.isConstraintSatisfied (Array.from(csp[variable]['domain'])[0], csp[neighbor]['domain'], csp[neighbor]['domainLength']) ) {
				return false
			}
		}
		return true
			

	}

	isConstraintSatisfied (x, domain, domainLength) {


		if (domainLength > 1) {
			return true
		}
		else if ( domainLength == 0 ){
			return false
		}
		else {
			let a = Array.from(domain)
			if (a[0] == x) {
				return false
			}
			else {
				
				return true
			}
		}
	}

	selectNextAssignmentVariable (csp) {
		let lowestValue = Number.POSITIVE_INFINITY
		let lowestVariable;

		for (let key in this.assignment ) {
			if (!this.assignment[key]) {
				let lengthOfDomainSet = csp[key]['domainLength']
			
				if (lengthOfDomainSet < lowestValue) {
					lowestValue = lengthOfDomainSet
					lowestVariable = key
				}
			}
		}

		return lowestVariable
	}

}

module.exports = {
	Backtrack
}