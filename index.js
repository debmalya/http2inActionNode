var http = require('http')
   const port = 3000
const requestHandler = (request, response) => {
     console.log(request.url) 
     response.setHeader('Link','</assets/css/common.css>;rel=preload'); 
     response.writeHead(200, {"Content-Type": "text/html"}); 
     response.write('<!DOCTYPE html>\n')
     response.write('<html>\n')
     response.write('<head>\n')
     response.write('<link rel="stylesheet" type="text/css" href="/assets/css/common.css">\n') 
     response.write('</head>\n')
     response.write('<body>\n') 
     response.write('<h1>Test</h1>\n') 
     response.write('</body>\n') 
     response.write('</html>\n') 
     response.end();
}
var server = http.createServer(requestHandler)
