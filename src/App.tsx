import type { Component } from "solid-js";
import Header from "./components/UI/Header/Header";
import NewsOptions from "./components/NewsOptions/NewsOptions";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1 flex items-center justify-center">
        <NewsOptions />
      </main>
    </div>
  );
};

export default App;
