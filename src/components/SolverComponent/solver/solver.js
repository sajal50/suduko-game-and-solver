let {CSP} = require ('./CSP.js');
let {Backtrack} = require ('./Backtrack.js');
let {AC3} = require ('./ac3.js');



const solver = (string) => {
	let c =  new CSP (string)
	let b = new Backtrack (c.csp)
	let a = new AC3(c.csp)
	a.algo()
	let csp = b.algo (c.csp)
	let allKeys = Object.keys(csp)
	allKeys = allKeys.sort()

	let ans = ''
	for (let key of allKeys) {
		ans += csp[key]
	}
	return ans;
};
export default solver;