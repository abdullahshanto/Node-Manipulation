const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/requests.log");

function logRequest(message) {
  const timestamp = new Date().toISOString();

  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFileSync(logFilePath, logMessage, "utf-8");
}

module.exports = logRequest;