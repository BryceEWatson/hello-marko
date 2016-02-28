$rmod.def("/src/services/hello/routes", function(require, exports, module, __filename, __dirname) { module.exports = [
    {
        name: 'getWelcomeMsg',
        method: 'GET',
        path: '/api/getWelcomeMsg'
    }
];
});