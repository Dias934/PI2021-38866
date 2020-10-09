var i={}
function countWords(inputWords) {
    return inputWords.reduce(reducer, {}) //function and initializer
	
}

function reducer(acc, cur){
	acc[cur] = ++acc[cur] || 1
	return acc
	/*if(acc != i){
		var aux=acc;
		acc=i;
		acc[aux]=1;
	}
	if(Object.keys(acc).includes(cur))
		acc[cur]++;
	else
		acc[cur]=1;
	return acc*/
}

module.exports = countWords