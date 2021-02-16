import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Calculator } from "./components/Calculator/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
