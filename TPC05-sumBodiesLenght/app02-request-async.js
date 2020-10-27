const areq = require('urllib')

const urls = ['http://example.com', 'https://dzone.com/', 'https://developer.android.com/']

function bodyLength(url) {
    areq.request(url,function(err, body){
        if(err) throw err
        const data=body.toString()
        console.log(`>>>> ${url} body size = ${data.length}`)
    })
}

urls
    .forEach(url => {
        console.log('Requesting ' + url)
        bodyLength(url)
    })