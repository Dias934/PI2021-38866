
function inspector(obj, spacing){
    let member
    console.log(spacing+'{')
    for (let idx in Object.keys(obj) ){
        member=Object.keys(obj)[idx]
        if(isPrimitive(obj[member]))
            console.log(spacing+member +'= '+obj[member])
        else
            inspectObject(obj, member, spacing)
    }
    console.log(spacing+'}')
}

function inspectObject(obj, member, spacing){
    if(isFunction(obj[member])){
        if(obj[member].length==0)
            console.log(spacing+'function '+member+'= ' +obj[member]())
    }
    else if(isObject(obj[member])){
        console.log(spacing+member+' : ')
        inspector(obj[member], spacing+'\t')
    }
}

function isPrimitive(member){
    return (member !== Object(member)) //check value and type
}

function isFunction(member){
    return typeof(member)=='function'
}

function isObject(member){
    return typeof(member)=='object'
}





function Student(name, nr, address){
    return{
        'name' : name,
        'nr': nr,
        'address': address,
        'setAddress': function(street, nr){this.address=Address(street, nr)},
        'toString': function (){ return 'name: '+this.name+', nr: '+this.nr+', address: '+this.address.toString()}
        
    }
}

function Address(street, nr){
    return {
        'street' : street,
        'nr' : nr,
        'toString': function (){ return 'nr: '+this.nr+', street: '+this.street}
    }
}

let std= Student('Ze', 123, Address('Ruazita', 2))
inspector(std,'')