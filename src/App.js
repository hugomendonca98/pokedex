import React from 'react';

import Routes from './global/routes/routes';
import {GlobalStyle} from './global/styles/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
