import Header from "../UI/Header/Header";
import { ParentComponent } from "solid-js";
import Footer from "../UI/Footer/Footer";

const Layout: ParentComponent = (props) => {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-1 flex items-center justify-center">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
