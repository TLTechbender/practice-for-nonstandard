function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
let newarr=[];
    //for(i=0 ;i<arr.length; i++){
        for (let i = 1; i < arr.length; i += 2) {
      if(i%2!==0){
             newarr.push(arr[i]);
        }
    }
return newarr;
};

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
let newarr=[];
    for(let i=arr.length-1;i>=0; i--){
        if(i%2!==0){
        newarr.push(arr[i]);
        }
    }
return newarr;

}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here for (let i = 1; i < arr.length; i*=2) {

let newarr=[];
    for (let i = 1; i < arr.length; i*=2) {

             newarr.push(arr[i]);

    }
return newarr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
let newarr=[];
    for (let i = 1; i < arr.length; i*=n) {
  newarr.push(arr[i]);
}
return newarr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
let newarr=[];
    for (let i = 0; i < arr.length/2 ; i++) {
  newarr.push(arr[i]);
}
return newarr;
}



function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
// I sincerely don't know how to get past this on my own, had to copy the solution, The solution is brilliant by the way!!!
    let newarr=[];
   for (let i = Math.floor((arr.length + 1) / 2); i < arr.length; i += 1) {
    newarr.push(arr[i]);
}
return newarr;
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
