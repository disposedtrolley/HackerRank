/*
	Javascript implementation of a slow algorithm solving the Kangaroo problem.
	https://www.hackerrank.com/challenges/kangaroo
 */

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    
    var response = "NO";
    // if 2nd kangaroo has a slower velocity than the first, continue
    if (v2 < v1) {
        // iterate 10,000 times as per constraints and check positions
        var firstKangarooPos = x1;	// store kangaroo 1 pos
        var secondKangarooPos = x2;	// store kangaroo 2 pos
        for (var i = 0; i < 10000; i++) {
            firstKangarooPos += v1;
            secondKangarooPos += v2;
            if (firstKangarooPos == secondKangarooPos) {
                response = "YES";
            }
        }
    }
    console.log(response);
}