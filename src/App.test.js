import React from 'react';
import ReactDOM from 'react-dom';
import landing from './screens/landing';
import topFiller from './components/topFiller'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
