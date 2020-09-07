import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Site from './containers/Site'

function App() {
  return (
    <>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </>
  );
}

export default App;
