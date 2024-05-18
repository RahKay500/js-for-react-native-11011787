let arr = [];
// this function takes an array of numbers and returns a new array with the numbers squared if they are even and multiplied by 3 if they are odd
function processArray(arg) {
    arg.forEach((args) => {
        if (args % 2 === 0){
            args = args ** 2;
            arr.push(args);
        }else {
            args = args * 3;
            arr.push(args);
        }
    });
    return arr;
}
numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(processArray(numbers)); // outputs array [3, 4, 9, 16, 15, 36, 21, 64, 27, 100]



// this function takes an array of strings and an array of numbers and returns a new array with the strings in uppercase if the number is even and in lowercase if the number is odd
function formatArrayStrings(strings, numbers) {
    let result = [];
    strings.forEach((str, num) => {
        if (numbers[num] % 2 === 0) {
            result.push(str.toUpperCase());
        } else {
            result.push(str.toLowerCase());
        }
    });
    return result;
}

strings = ['This', 'code', 'will', 'output', 'uppercase', 'strings', 'for', 'even', 'numbers', 'and', 'lowercase', 'strings', 'for', 'odd', 'numbers'];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

result = formatArrayStrings(strings, numbers);

console.log(result); // outputs ['this', 'CODE', 'will', 'OUTPUT', 'uppercase', 'STRINGS', 'for', 'EVEN', 'numbers', 'AND', 'lowercase', 'STRINGS', 'for', 'ODD', 'numbers']
