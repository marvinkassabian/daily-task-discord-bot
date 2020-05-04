module.exports = () => {
  const log = message => console.log(message);
  const info = message => console.log(`[INFO] ${message}`);
  const error = message => console.log(`[ERROR] ${message}`);

  return Object.freeze({
    log,
    info,
    error,
  });
};