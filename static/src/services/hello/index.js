$rmod.def("/src/services/hello/index", function(require, exports, module, __filename, __dirname) { module.exports = require('/src/util/service-helper-browser'/*'src/util/service-helper'*/).createService(
    require('./routes'),
    require('./handlers'));
});