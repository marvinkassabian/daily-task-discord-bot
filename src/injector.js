module.exports = () => {
    const constructors = {};
    const services = {};

    const register = (name, create) => {
        constructors[name] = () => inject(create);
    };
    const render = (name) => {
        console.log('creates', constructors)
        console.log('services', services)
        console.log('render', name)
        if (!services[name])
            services[name] = constructors[name]();
        return services[name];
    };
    const inject = create => {
        const argNames = getArguments(create);
        console.log('argNames', argNames);
        const args = new Map(argNames.map(argName => [argName, render(argName)]));
        const dependencies = Object.fromEntries(args);

        console.log(dependencies);
        return create(dependencies);
    };
    const getArguments = fn => {
        const FN_ARGS = /^\s*[^\(]*\(\s*([^\)]*)\)/m;
        const FN_ARG_SPLIT = /[,\s]+/;
        const FN_ARG = /^(\$[a-zA-Z0-9_]+)/;
        const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

        if (typeof fn !== 'function' || !fn.length) {
            console.log('not a function', fn);
            return [];
        }
        const fnText = fn.toString();
        const strippedFnText = fnText.replace(STRIP_COMMENTS, '');
        const matches = strippedFnText.match(FN_ARGS);
        const argNames = matches[1]
            .split(FN_ARG_SPLIT);
        console.log('argNames', argNames);
        const filteredArgNames = argNames.filter(argName => FN_ARG.test(argName)).map(argName => argName.match(FN_ARG)[1]);
        console.log('filteredArgNames', filteredArgNames);
        return filteredArgNames;
    };

    return Object.freeze({
        register,
        render,
    });
};