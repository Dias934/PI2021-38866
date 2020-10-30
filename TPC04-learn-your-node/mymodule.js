const fs=require('fs')

/**
 * 
 * @param {String} dir 
 * @param {String} ext 
 * @param {Function(Error, Array)} cb 
 */
module.exports=function(dir, ext, cb){
    fs.readdir(dir, (err, files)=>{
        if(err) return cb(err)
        cb(null, files.filter(val=> val.includes('.'+ext)))
    })
}