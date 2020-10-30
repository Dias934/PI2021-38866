let sum = 0
const arr=process.argv
for(let i=2; i<arr.length; i++){
    sum+=parseInt(arr[i])
}
console.log(sum)