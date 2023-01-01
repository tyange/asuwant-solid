import { Article } from "../../../types/article";

type ArticleItemProps = {
  article: Article;
};
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li class="w-80 sm:w-96 md:w-4/5">
      <a
        href={article.url ? article.url : ""}
        class="w-full block shadow-md border rounded-xl p-10 hover:shadow-lg hover:underline transition-all"
      >
        <p>{article.title}</p>
      </a>
    </li>
  );
};

export default ArticleItem;
