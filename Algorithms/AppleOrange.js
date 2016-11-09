/*
    Javascript solution to the Apples and Oranges problem
    https://www.hackerrank.com/challenges/apple-and-orange
 */

function main() {
    // var s_temp = readLine().split(' ');
    // var s = parseInt(s_temp[0]);
    // var t = parseInt(s_temp[1]);
    // var a_temp = readLine().split(' ');
    // var a = parseInt(a_temp[0]);
    // var b = parseInt(a_temp[1]);
    // var m_temp = readLine().split(' ');
    // var m = parseInt(m_temp[0]);
    // var n = parseInt(m_temp[1]);
    // apple = readLine().split(' ');
    // apple = apple.map(Number);
    // orange = readLine().split(' ');
    // orange = orange.map(Number);
    
    var s = 7;      // lower bound (inclusive) of house
    var t = 11;     // upper bound (inclusive) of house
    var a = 5;      // position of apple tree
    var b = 15;     // position of orange tree
    var m = 3;      // number of apples
    var n = 2;      // number of oranges
    var apple = [-2, 2, 1];     // distances each apple falls from the tree
    var orange = [5, -6];       // distances each orange falls from the tree

    var applesOnHouse = 0;
    var orangesOnHouse = 0;

    var currentPos;

    // apples
    for (var i = 0; i < m; i++) {
        currentPos = a + apple[i];
        if (within(currentPos, s, t)) {
            applesOnHouse += 1;
        }
    }

    // oranges
    for (var j = 0; j < n; j++) {
        currentPos = b + orange[j];
        if (within(currentPos, s, t)) {
            orangesOnHouse += 1;
        }
    }

    console.log(applesOnHouse);
    console.log(orangesOnHouse);

}

function within(num, lower, upper) {
    return num >= lower & num <= upper;
}