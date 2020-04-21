const Container = {};

Container.init = function () {
  this.services = {};

  return this;
};

Container.service = function (name, callback) {
  Object.defineProperty(this, name, {
    get: () => {
      if (!this.services.hasOwnProperty(name)) {
        this.services[name] = callback(this);
      }

      return this.services[name];
    },
    configurable: true,
    enumerable: true
  });

  return this;
};

export default Container;
