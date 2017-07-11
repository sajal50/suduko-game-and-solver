class AC3 {
	constructor (csp) {
		this.csp = csp
	}
	initializeQueue (csp) {
		let q = []

		for (let key in csp) {
			for (let neighbor of csp [key]['neighbors']) {
				q.push([key, neighbor])

			}
		}
		this.q = q
	}

	algo () {
		this.initializeQueue (this.csp)
		while (this.q.length) {
			let constraint = this.q.shift()
			let Xi = constraint[0]
			let Xj = constraint[1]

			if (this.revise (Xi, Xj ) ) {
				if  ( this.csp [Xi]['domain'].length == 0 ) {
					return false
				}
				for (let Xk of this.csp[Xi]['neighbors'] ) {
					if  (Xk !== Xj) {
						this.q.push([Xk, Xi])
					}
				}
			}
		}
		return true
	}
	revise (Xi, Xj) {
		let revised = false
		let domainOfXj = this.csp [Xj]['domain']
		let domainOfXi = this.csp [Xi]['domain']
		let valuesToRemove = []
		for (let x of domainOfXi) {

			if  (!this.isConstraintSatisfied (x, domainOfXj))  {
				valuesToRemove.push (x)
				revised = true
			}
		}

		for (let x of valuesToRemove ){
			domainOfXi.delete (x)
		}
		return revised

	}
	
	isConstraintSatisfied (x, domainOfXj) {
		if (domainOfXj.size > 1 ) {
			return true
		} else if ((domainOfXj.size) == 0) {
			return false
		} else {
			
			let a = Array.from (domainOfXj)
			if (a[0] == x) {
				return false
			}
			else {
				return true

			}

		}
	}
		
}




module.exports = {
	AC3
}