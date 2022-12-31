import { Article } from "../../../types/article";

type ArticleItemProps = {
  article: Article;
};
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li>
      <div>
        <p>{article.title}</p>
      </div>
    </li>
  );
};

export default ArticleItem;
