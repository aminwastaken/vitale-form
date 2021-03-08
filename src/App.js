import './App.css';
import MultiStepForm from './pages/MultiStepForm';
import Test from './Test';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MultiStepForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
