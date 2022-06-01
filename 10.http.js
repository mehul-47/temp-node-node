const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to our short history page')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>we can't seems to find the page you are looking for</p>
    <a href="/">back home</a>`)
})

server.listen(5000)