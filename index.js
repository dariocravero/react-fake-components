var React = require('react');

module.exports = function fakeComponents(n, type) {
  var components = [];
  for (var i=0; i < n; i++) {
    components.push(props => React.createElement(type || 'span'));
  }
  return components;
}
