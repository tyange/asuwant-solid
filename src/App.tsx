import type { Component } from "solid-js";
import Header from "./components/UI/Header/Header";
import NewsOptions from "./components/NewsOptions/NewsOptions";

const App: Component = () => {
  return (
    <div>
      <Header />
      <main>
        <NewsOptions />
      </main>
    </div>
  );
};

export default App;
