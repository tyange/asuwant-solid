import Header from "../UI/Header/Header";
import { ParentComponent } from "solid-js";

const Layout: ParentComponent = (props) => {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1 flex items-center justify-center">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
