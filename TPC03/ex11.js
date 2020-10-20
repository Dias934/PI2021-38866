module.exports = function arrayMap(arr, fn) {
    return arr.reduce( function(acc, curr, index, arr)  {
        acc.push(fn(curr, index, arr))
        return acc
    }, [])
}