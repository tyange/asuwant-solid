import { Article } from "../../types/article";
import { For } from "solid-js";
import ArticleItem from "./Article/ArticleItem";

type ArticlesProps = {
  articles: Article[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <ul class="flex flex-col justify-center items-center gap-8 p-10">
      <For each={articles}>
        {(article) => <ArticleItem article={article} />}
      </For>
    </ul>
  );
};

export default Articles;
