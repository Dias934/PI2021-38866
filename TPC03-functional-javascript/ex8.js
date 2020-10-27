
/* undesired solution
function duckCount() {
    let arr=Array.from(arguments)
    let count=0
    for (let i = 0; i < arr.length; i++) {
        if(Object.prototype.hasOwnProperty.call(arr[i], 'quack'))
            count++        
    }
    return count
 }
*/

// desired solution
//Array.prototype.slice.call(arguments) -> convert object argument to an array of objects. Array.From doesn't work if it has only 1 argument
//.filter() -> filter all the objects we don't want
// Object.prototype.hasOwnProperty.call(obj, 'quack') -> checks if the Object obj has 'quack' property
//.length -> the size of the returned filtered array
function duckCount(){
    return Array.prototype.slice.call(arguments) 
            .filter( obj => 
                Object.prototype.hasOwnProperty.call(obj, 'quack'))
            .length
}

module.exports = duckCount