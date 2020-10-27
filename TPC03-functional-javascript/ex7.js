// passing an array of words, it will return an object containing the number each word is present in the array

function reduce(arr, fn, initial) {
    if(!arr.length) return initial //check if the array is empty
    fn(initial , arr[0])           //put the first element of the array in the object inital
    return reduce(arr.slice(1), fn, initial)    //recursive call but excludes the first element of the array
 }

  module.exports = reduce