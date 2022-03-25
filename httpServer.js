const express = require("express");
const http = require('http');
const ip = require('ip');

function start(){
    let app = express();
    let server = http.createServer(app);

    app.all("*", (req, res, next) => {
        console.log(`${new Date().toLocaleString()} | ${req.socket.remoteAddress} | ${req.url}`);
        next();
    });

    app.get('/', (req, res) => {
        res.render('main');
    })
    
    // EJS for front end
    app.set('view engine', 'ejs')

    // Public path for assets
    app.use(express.static(process.env.PUBLIC_PATH));
    
    server.listen(process.env.PORT, () => {
        console.log(`HTTP server running on http://${ip.address()}:${process.env.PORT}`);
    });

    return server
}

module.exports = {start};