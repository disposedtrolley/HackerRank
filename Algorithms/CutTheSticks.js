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
    		// remove stick if value <= 0
    		if (arr[i] <= 0) {
    			arr.splice(i, 1);
    			i =- 1;		// decrement i after splicing
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