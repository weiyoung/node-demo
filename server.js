
// Load HTTP module
// Run node (FILENAME).js
const http = require("http")
const hostname = "127.0.0.1"
const port = 3001

// Create HTTP server and listen on port 3000 for requests
// Run curl --verbose localhost:(PORT)
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("HELLO WORLD!\n")
})

server.listen(port, hostname, () => {
    console.log(`Listening on ${hostname}:${port}`)
})
