import { Suspense } from "solid-js";
import Layout from "../components/Layout/Layout";
import LoadingComponent from "../components/UI/LoadingComponent/LoadingComponent";
import NewsOptions from "../components/NewsOptions/NewsOptions";

const MainPage = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingComponent />}>
        <NewsOptions />
      </Suspense>
    </Layout>
  );
};

export default MainPage;
