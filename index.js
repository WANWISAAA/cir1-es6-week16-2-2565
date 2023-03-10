const http = require('http')

const server = http.createServer(function(req,res){
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('Home page')
        res.end()
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('About page')
        res.end()
    }else if(req.url === '/admin'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('Admin page')
        res.end()
    }else{
        res.end('Invalid Request!')
    }
}) 
PORT = process.env.PORT || 4000
server.listen(5000,function(){
    console.log(`Server Running at http://localhost:5000`)
})