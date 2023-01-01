/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Router } from "@solidjs/router";
import App from "./App";

const routes = (
  <Router>
    <App />
  </Router>
);

render(() => routes, document.getElementById("root") as HTMLElement);
