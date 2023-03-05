const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
    res.end('Welcome to my web')
    }
    if(req.url ==='/about'){
        res.end('This is About')
    }
    res.end(`
    <h1>Opps!</h1>
    <a href="/"> back</a>
    `)
   
})
server.listen(5000)