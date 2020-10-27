const areq = require('urllib')

const urls = ['http://example.com', 'https://dzone.com/', 'https://developer.android.com/', 'https://dzone.com/', 'https://www.w3schools.com/', 'https://dzone.com/']

sumBodyLength(urls, (err, val) =>{
    if(err)console.log(err)
    else console.log(val)
})

function sumBodyLength(urls, cb){
    let sum=0;
    let count=0;
    urls.forEach(url => {
        bodyLength(url, (err, size) => {
            count++
            if(err) cb(err)
            else{
                sum+=size
                if(count== urls.length)
                    cb(null, sum)
            }
        })
    });
}

function bodyLength(url, cb) {
    areq.request(url, function(err, body){
        if(err) throw err
        else{
            const data =body.toString()
            console.log(`>>>> ${url} body size = ${data.length}`)
            cb(null, data.length)
        }
        
    })
}

/*urls
    .forEach(url => {
        console.log('Requesting ' + url)
        bodyLength(url)
    })*/