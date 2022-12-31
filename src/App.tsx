import type { Component } from "solid-js";
import Header from "./components/UI/Header/Header";
import NewsOptions from "./components/NewsOptions/NewsOptions";
import { Suspense } from "solid-js";
import LoadingComponent from "./components/UI/LoadingComponent/LoadingComponent";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1 flex items-center justify-center">
        <Suspense fallback={<LoadingComponent />}>
          <NewsOptions />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
