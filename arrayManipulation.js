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