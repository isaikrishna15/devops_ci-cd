const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World - Version 1");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
