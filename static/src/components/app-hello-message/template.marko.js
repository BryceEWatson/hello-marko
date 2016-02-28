$rmod.def("/src/components/app-hello-message/template.marko", function(require, exports, module, __filename, __dirname) { function create(__helpers) {
  var __widgetType = {
          name: "/src/components/app-hello-message",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require('/$/marko-widgets'/*"marko-widgets"*/),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require('/$/marko-widgets/taglib/widget-tag'/*"marko-widgets/taglib/widget-tag"*/)),
      attr = __helpers.a,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        id: "hello-message",
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<section" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><span>Hello " +
            escapeXml(data.name) +
            "!</span><p if=\"notEmpty(data.welcomeMsg)\">" +
            escapeXml(data.welcomeMsg) +
            "</p></section>");
        }
      }, out);
  };
}

(module.exports = require('/$/marko'/*"marko"*/).c(__filename)).c(create);

});