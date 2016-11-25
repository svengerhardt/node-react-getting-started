let path = require("path");
require('app-module-path').addPath(path.resolve(__dirname, '..'));

let http = require("http");
let logger = require("backend/logger");
let app = require("backend/app");

let HTTP_PORT = process.env.HTTP_PORT || 3010;

let server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(HTTP_PORT);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case "EACCES":
      logger.error(HTTP_PORT + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(HTTP_PORT + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  logger.info("Listening on port " + HTTP_PORT);
}
