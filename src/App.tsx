import type { Component } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import MainPage from "./pages/MainPage";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={MainPage} />
    </Routes>
  );
};

export default App;
