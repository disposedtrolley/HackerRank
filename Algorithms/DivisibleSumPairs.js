/*
	Javascript solution to the Divisible Sum Pairs problem
	https://www.hackerrank.com/challenges/divisible-sum-pairs
 */

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    var sum = null;		// store sum of i and j
    var totalDivisible = 0;		// store total i and j sum pairs divisible by k

    for (var i = 0; i < n; i++) {
    	// satisfy i < j constraint by iterating j from i+1
    	for (var j = i+1; j < n; j++) {
    		sum = a[i] + a[j];
    		// check remainder
    		if (sum % k === 0) {
    			totalDivisible++;
    		}
    	}
    }
    console.log(totalDivisible);
}