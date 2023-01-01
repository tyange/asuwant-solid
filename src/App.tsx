import type { Component } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import MainPage from "./pages/MainPage";
import CreditsPage from "./pages/CreditsPage";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={MainPage} />
      <Route path="/credits" component={CreditsPage} />
    </Routes>
  );
};

export default App;
