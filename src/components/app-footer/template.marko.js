function create(__helpers) {
  var __widgetType = {
          name: "/src/components/app-footer",
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
      w_preserve = __loadTag(require("marko-widgets/taglib/preserve-tag")),
      attr = __helpers.a,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        id: "footer",
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          var __widgetId0 = widget.id;
          w_preserve({
              id: __widgetId0,
              renderBody: function renderBody(out) {
                out.w("<footer" +
                  attr("id", __widgetId0) +
                  attrs(__widgetAttrs(widget)) +
                  "><p>Created by <a href=\"http://github.com/bryceewatson/\">Bryce Watson</a> and <a href=\"https://github.com/watsokel/\">Kelvin Watson</a></p></footer>");
              }
            }, out);
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
