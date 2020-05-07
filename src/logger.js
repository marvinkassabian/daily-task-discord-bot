module.exports = () => {
  return Object.freeze({
    log: message => console.log(message),
    info: message => console.log(`[INFO] ${message}`),
    error: message => console.log(`[ERROR] ${message}`),
  });
};