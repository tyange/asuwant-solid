import Layout from "../components/Layout/Layout";
import { FaBrandsDiscord, FaBrandsGithub } from "solid-icons/fa";

const CreditsPage = () => {
  return (
    <Layout>
      <div class="flex flex-col gap-5 items-center">
        <p>NewsAPI, SolidJS, Tailwind를 활용한</p>
        <p>Single Page Application 입니다.</p>
        <div class="flex justify-center gap-3">
          <a href="https://discord.gg/B6YaNZJb">
            <FaBrandsDiscord size="30" />
          </a>
          <a href="https://github.com/">
            <FaBrandsGithub size="30" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CreditsPage;
