"use strict";

var rootElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootElement);
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "hello"), /*#__PURE__*/React.createElement("h1", null, "world"), /*#__PURE__*/React.createElement("button", null, "button"), /*#__PURE__*/React.createElement(Person, {
    name: "Jack"
  }), /*#__PURE__*/React.createElement(Person, {
    name: "Jack2"
  }));
}
function Person(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement("div", null, name);
}
root.render( /*#__PURE__*/React.createElement(App, null));

// jsx syntax - javascript xml syntax