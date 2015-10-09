var fakeComponents = require('../index');
var shallowRender = require('react-shallow-render');
var test = require('tape');
var React = require('react');

test('#fakeComponents', function(t) {
  var faked = fakeComponents(2);

  t.equals(faked.length, 2, 'returns the right amount of components');
  faked.forEach(function(component) {
    t.equals(shallowRender(React.createElement(component)).type, 'span', 'defaults to creating spans');
  })

  var fakedWithType = fakeComponents(1, 'Other');

  t.equals(shallowRender(React.createElement(fakedWithType[0])).type, 'Other', 'allows to change the type');

  t.end();
});
