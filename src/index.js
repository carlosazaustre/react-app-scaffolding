import React from "react";
import {render} from "react-dom";
import {Router} from "@reach/router";

import {Home} from "@screens/Home";

import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
