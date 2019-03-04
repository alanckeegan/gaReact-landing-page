import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import topFiller from '../components/topFiller'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
