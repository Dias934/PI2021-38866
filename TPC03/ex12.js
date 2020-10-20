function Spy(target, method) {
    
    let res={ count:0}
    target[method]=function(){
        res.count+=1
        return Object.call(target,arguments)
    }
    return res
}

module.exports = Spy