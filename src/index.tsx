import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Stack01 from './Stack01';

function App() {
  return (
    <div className="App">
      <Stack01 />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
