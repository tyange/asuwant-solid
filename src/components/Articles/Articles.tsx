import { Article } from "../../types/article";
import { For } from "solid-js";
import ArticleItem from "./Article/ArticleItem";

type ArticlesProps = {
  articles: Article[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <ul>
      <For each={articles}>
        {(article) => <ArticleItem article={article} />}
      </For>
    </ul>
  );
};

export default Articles;
