
function merge_sort(arr) {

    if (arr.length === 1) return arr;

    let left = merge_sort(arr.slice(0, Math.floor(arr.length / 2)));
    let right = merge_sort(arr.slice(Math.floor(arr.length / 2)), arr.length);

    let mergedArray = [];

    let leftCount = 0;
    let rightCount = 0;
 
    while (true) {
        if (left[leftCount] < right[rightCount]) {
            mergedArray.push(left[leftCount]);
            leftCount += 1;
        } else {
            mergedArray.push(right[rightCount]);
            rightCount += 1;
        }

        if (leftCount === left.length) {
            return mergedArray.concat(right.slice(rightCount));
        }

        if (rightCount === right.length) {
            return mergedArray.concat(left.slice(leftCount))
        }        
    }
}

console.log(merge_sort([2,6,4,1,78,96,43,5]));
console.log(merge_sort([3,8,324,1,5,1,67,89,5,3]));

