let arr = [1,6,7,3,4,8,9,2,5,10],
    testArr = [-1, 3, 8, 12, 4, 11, 7],
    testTarget = 10;

// testArr and testTarget answer is [[-1, 11], [3, 7]]
 

/**
 * 
 * 
 Write a function called
 `hasTargetSum` that receives two arguments:
   * an array of integers
   * a target integer
 
 The function should return all pairs of numbers found in the array that add up to the target number.
 hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]

 */


//  O(1)

//  O(log(n))

//  O(n)
 
//  O(n^2)

const hasTargetSum = (arr, target) => { // O(N^2) 
     // var to hold result arr
    let pairsArray=[] // O(1)  CONSTANT
     // for loop over array passed in 
    for (let i=0; i < arr.length-1; i++) { // O(n) LINEAR TIME 
   // inside of that iterate again from next element (so we don't repeat same index)
        for (let count=i+1; count < arr.length; count++) { //  O(n) LINEAR TIME 
         // if the pair adds to target, push the pairs into the array 
            if (arr[i] + arr[count] === target) { // O(1)  CONSTANT
                pairsArray.push([arr[i], arr[count]]) // O(1)  CONSTANT
            }
        }
    }
    return pairsArray // O(1)  CONSTANT
     // return the result array 
}


const hasTargetSumOptimized = (arr, target) => { // WE CAN GET THIS TO LINEAR TIME 

    // NOTES FROM STRATEGIZING
    // arr.find method is linear 
    // filter is also linear
    // iterate over array, find its compliment
    // STRATEGY ::: MEMOIZATION



    let pairsArray = []
    let visitedNums = {}  // takes more memory 
    for (let num=0; num < arr.length; num++){ // LINEAR TIME ARRAY LOOP
        console.log(visitedNums, pairsArray, arr[num])
        let compliment = target - arr[num]
        if(visitedNums[compliment]){ // CONSTANT TIME LOOKUP FOR COMPLEMENTARY NUMBER
            pairsArray.push([arr[num], compliment])
        }
        visitedNums[arr[num]] = true  // anything truthy can go here, can't do compliment in case it is zero
    }
    return pairsArray
} 





























 

/*********************** 
 * 
 * 
 * 
 * SECRETS BELOW DO NOT PROCEED 
 * 
 * 
 * 
 * ***********************/






const arrSum = arr => arr.reduce((a,b) => a + b, 0)

function containsAverage(arr){    // O(n)
    let sum = arrSum(arr)      // Linear O(n)         
    let average = sum / arr.length     // Constant O(1)   
    return arr.indexOf(average) != -1     // Linear O(n)
}


containsAverage(arr)

// Constant O(1) 
// Linear O(n)
// Quadratic O(n^2) 






/**
 * EXPLORING 
 * DIFFERENT VERSIONS OF 
 * HASTARGETSUM 
 * **without completed code body**
 */
// quadratic time O(n^2)
function version1m(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        // look at each number
        for(let j = 0; j < arr.length; j++){ // Linear Time: O(n)
            // if i+j === target
            console.log('running')
        }
    }
}

// quadratic time O(n^2)
function version2(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        let compliment = target - arr[i];
        if (arr.indexOf(compliment) > -1){  // Linear Time: O(n)
            console.log('found')
        }
    }
}


// Linear Time: O(n)
function version3(arr, target){
    let numsWeveSeen = {}
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        let compliment = target - arr[i];
        if(numsWeveSeen[compliment]) console.log('found');

        numsWeveSeen[arr[i]] = true
    }
}




// Cubic time O(n^2)
function hasTargetSumCubic(arr, target){
    for(let i = 0; i < arr.length; i++){ // Linear Time: O(n)
        // look at each number
        for(let j = 0; j < arr.length; j++){ // Linear Time: O(n)
            // if i+j === target
            for(let m = 0; m < arr.length; m++){ // Linear Time: O(n)
                // if i+j === target
                console.log('running')
            }
        }
    }
}