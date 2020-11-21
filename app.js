let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain; charset= utf-8"});
    switch(req.url){
        case "/":
            res.end("Bienvenidos a nuestro sitio web");
            break;

        case "/1":
            res.end("página 1");
            break;

        default:
            res.end("No encontrado");
            break;
    }

}).listen(3030, "localhost", () => {console.log("Funcionando en el puerto 3030")})