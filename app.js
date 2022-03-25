console.clear();

const HttpServer = require('./httpServer')
start();

function start(){
    setEnv()
    console.log('Environment vars set');
    
    let server = HttpServer.start()
    console.log('HTTP server started');
}

function setEnv(){
    // Set environment variables
    process.env.PORT = process.env.PORT || 8080;
    process.env.PUBLIC_PATH = `${__dirname}/public`;
}