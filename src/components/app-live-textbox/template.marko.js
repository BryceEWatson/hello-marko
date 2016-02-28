function create(__helpers) {
  var __widgetType = {
          name: "/src/components/app-live-textbox",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        id: "live-textbox",
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<section" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><input id=\"new-name\" placeholder=\"Enter your name\"></section>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
