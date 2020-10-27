

function logger(namespace) {
    let slice = Array.prototype.slice
    return function rec(){
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
        
    }
}

module.exports = logger