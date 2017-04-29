import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss'
import Example from './examples/Example';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Example />,
  document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./examples/Example', function () {
    // Require the new version and render it instead
    var NextLoad = require('./examples/Example')
    ReactDOM.render(<NextLoad />, document.getElementById('app'))
  });
}
