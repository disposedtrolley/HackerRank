/*
	Javascript solution for the Cut The Sticks problem.
	https://www.hackerrank.com/challenges/cut-the-sticks
 */

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    while (arr.length > 0) {
    	var smallestStick = getSmallestStick(arr);	// get the value of the smallest element
    	var elementsInArray = arr.length;	// store number of elements before cut

    	console.log(elementsInArray);	// output number of sticks in array before cutting

    	// reduce value of all elements by value of smallestStick
    	for (var i = 0; i < arr.length; i++) {
    		arr[i] -= smallestStick;
    	}

    	// remove elements < 0
    	for (var j = 0; j < arr.length; j++) {
    		if (arr[j] <= 0) {
    			arr.splice(j, 1);
    			j =- 1;		// decrement j after splicing
    		}
    	}
    }
}

function getSmallestStick(array) {
	array.sort(function(a, b) {
		return a-b;
	});
	return array[0];
}