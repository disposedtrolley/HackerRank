/*
	Javascript solution for the Viral Advertising problem.
	https://www.hackerrank.com/challenges/strange-advertising
 */

function processData(input) {
    var totalLikes = 0;		// running total of likes
    var currViews = 5;		// views on the current day, set to 5 for day one
    var currLikes = 0;		// likes on the current day

    for (var i = 0; i < input; i++) {
    	currLikes = Math.floor(currViews/2);
    	totalLikes += currLikes;
    	currViews = currLikes * 3;
    }

    console.log(totalLikes);
}