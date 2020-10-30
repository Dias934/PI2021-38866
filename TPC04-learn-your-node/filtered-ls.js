const fs=require('fs')

fs.readdir(process.argv[2], (err, files)=>{
    if(err) return console.log(err)
    const arr=files.filter(file => file.includes('.'+process.argv[3]))
    arr.forEach(val=> console.log(val))
})