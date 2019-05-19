const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.writeHead(200,{'Content-type':'text/html'});
        let HTML = fs.readFileSync('./index.html');
        res.end(HTML)
    }else if (req.url === "/api/user"){
        res.writeHead(200,{'Content-type':'application/json'});
        const json = JSON.stringify({ 
            name:'Boris',
            cars:['Ford','Nissan']
        })
        res.end(json)
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(8181,'127.0.0.1');
console.log('server is running on port 8181')


// res.write(`
//     <html>
//         <body>
//             <h1 style="background:red">Hello there</h1>
//         </body>
//     </html>
//     `)

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(HTML)
// })

// res.end(HTML)