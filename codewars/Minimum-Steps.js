/**
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
 */
function minimumSteps(numbers, value){
    let sum = 0, i = 0;
    numbers = numbers.filter((el) => el < value).sort((a, b) => a-b);
    for (let j=0; sum < value; j++) {
        sum += numbers[j];
        console.log(numbers);
        console.log(sum, value);
        i = j;
    }
    return i;    
}
console.log(minimumSteps([8, 9, 10, 4, 2, 24, 40], 23));