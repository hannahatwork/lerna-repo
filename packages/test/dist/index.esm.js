import React from 'react';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n";
styleInject(css_248z);

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", null, "Favorite color"), /*#__PURE__*/React.createElement("select", {
    name: "colors",
    id: "colors"
  }, /*#__PURE__*/React.createElement("option", {
    value: "chartreuse"
  }, "chartreuse"), /*#__PURE__*/React.createElement("option", {
    value: "burnt-umber"
  }, "burnt umber"), /*#__PURE__*/React.createElement("option", {
    value: "lilac"
  }, "lilac"), /*#__PURE__*/React.createElement("option", {
    value: "deep-sea-blue"
  }, "deep sea blue"), /*#__PURE__*/React.createElement("option", {
    value: "other"
  }, "other")));
}

export { App as TestApp };
