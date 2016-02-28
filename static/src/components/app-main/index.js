$rmod.def("/src/components/app-main/index", function(require, exports, module, __filename, __dirname) { var app = require('/src/app'/*'src/app'*/);

module.exports = require('/$/marko-widgets'/*'marko-widgets'*/).defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            name: input.name,
            welcomeMsg: input.welcomeMsg
        };
    },
    getTemplateData: function(state, input) {
        return {
            name: state.name,
            welcomeMsg: state.welcomeMsg
        };
    }
});
});