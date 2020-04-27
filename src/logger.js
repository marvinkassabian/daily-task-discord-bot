const Logger = {};

Logger.init = function () {
  return this;
}

Logger.log = function (message) {
  console.log(message);
}

Logger.error = function (message) {
  console.error(message);
}

export default Logger;