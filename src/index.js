import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
