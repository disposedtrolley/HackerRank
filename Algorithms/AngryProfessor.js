/*
	Javascript solution to the Angry Professor problem
	https://www.hackerrank.com/challenges/angry-professor
 */

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);

        var studentsOnTime = 0;		// total students with arrival time >= 0
        var cancelled = null;	// outcome

        for (var i = 0; i < n; i++) {
        	if (a[i] <= 0) studentsOnTime++;
        }

        if (studentsOnTime >= k) {
        	cancelled = "NO";
        } else {
        	cancelled = "YES";
        }

        console.log(cancelled);

    }

}