// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010
// ======
// 11110
// 10110
// 10111
// 10101
// 11100
// 10000
// 11001
// ======
// 10110
// 10111
// 10101
// 10000
// ======
// 10110
// 10111
// 10101
// ======
// 10110
// 10111
// ======
// 10111

let input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split("\n");

let measurements = [];

input.forEach(
    m => measurements.push(m.split("").map(Number)))

console.log(measurements)

function getProduct(a, b) {
    return a * b;
}
function getDecimalFromBinary(binary) {
    let result = 0;
    let binaryStr = binary.toString()

    for (let i = 0; i < binaryStr.length; i++) {
        let val = parseInt(binaryStr[i])

        result = result + (val * Math.pow(2, binaryStr.length - i - 1))
    }
    return result;
}



/**
 * Solution
 */
function getCO2Rating() {

}


function getO2Rating(arr) {

    let o2RatingArr = []
    let columnSum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i][0] === 1) {
            columnSum += 1;
        }
    }

    if (columnSum > arr.length - columnSum) {
        o2RatingArr.push(arr.filter(item => item[0] === 1))
    }
    return o2RatingArr
}

let o2Rating = getO2Rating(measurements);

for (let i = 0; i < o2Rating.length; i++) {

}
console.log(o2Rating)


