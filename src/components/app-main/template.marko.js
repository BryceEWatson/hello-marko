function create(__helpers) {
  var __widgetType = {
          name: "/src/components/app-main",
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
      attrs = __helpers.as,
      app_live_textbox = __loadTag(require("../app-live-textbox")),
      app_hello_message = __loadTag(require("../app-hello-message"));

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        id: "main",
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<section" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            ">");

          app_live_textbox({}, out);

          app_hello_message({
              name: data.name,
              welcomeMsg: data.welcomeMsg
            }, out);

          out.w("</section>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
