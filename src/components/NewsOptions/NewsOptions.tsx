import { Component, createSignal, For } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import selectedCountry from "../../store/selectedCountry";
import selectedCategory from "../../store/selectedCategory";
import SubmitButtons from "./SubmitButtons/SubmitButtons";
import TopHeadlineAPI from "../../api/topHeadlines/TopHeadlineAPI";
import { News } from "../../types/news";

const NewsOptions: Component = () => {
  const [news, setNews] = createSignal<News[] | undefined>(undefined);

  const { country } = selectedCountry;
  const { category } = selectedCategory;

  const divider = () => (
    <div class="w-full flex justify-center items-center">
      <div class="w-1/4 border-t-2"></div>
    </div>
  );

  const onClickSubmitHandler = async () => {
    try {
      const res = await TopHeadlineAPI.articles(
        country()!.code,
        category()!.name
      );

      const data = await res.data;

      setNews(data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!news() ? (
        <>
          <CountryOptions />
          {divider()}
          <CategoryOptions />
          {country() && category() && (
            <>
              {divider()}
              <SubmitButtons onClickSubmitHandler={onClickSubmitHandler} />
            </>
          )}
        </>
      ) : (
        <div>
          <For each={news()}>{(article) => <div>{article.title}</div>}</For>
        </div>
      )}
    </div>
  );
};

export default NewsOptions;
