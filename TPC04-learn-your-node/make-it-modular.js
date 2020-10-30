const mymodule = require('./mymodule')
const dir=process.argv[2]
const ext=process.argv[3]
mymodule(dir, ext, (err, files)=>{
    if(err)console.error(err)
    else files.forEach(val => console.log(val));
})