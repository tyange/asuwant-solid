import { Component, createResource, createSignal, Show } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import selectedCountry from "../../store/selectedCountry";
import selectedCategory from "../../store/selectedCategory";
import SubmitButtons from "./SubmitButtons/SubmitButtons";
import TopHeadlineAPI from "../../api/topHeadlines/TopHeadlineAPI";
import { Article } from "../../types/article";
import ErrorComponent from "../UI/ErrorComponent/ErrorComponent";
import Articles from "../Articles/Articles";

const NewsOptions: Component = () => {
  const [isError, setIsError] = createSignal(false);

  const { country } = selectedCountry;
  const { category } = selectedCategory;

  const [articles, { refetch }] = createResource<Article[]>(async () => {
    if (!country() || !category()) return;

    try {
      const res = await TopHeadlineAPI.articles(
        country()!.code,
        category()!.name
      );
      const data = await res.data;

      return data.articles;
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  });

  const divider = () => (
    <div class="w-full flex justify-center items-center">
      <div class="w-1/4 border-t-2"></div>
    </div>
  );

  const onClickSubmitHandler = async () => {
    refetch();
  };

  return (
    <div>
      <Show when={!isError()} keyed={true} fallback={<ErrorComponent />}>
        {!articles() ? (
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
          <Articles articles={articles()!} />
        )}
      </Show>
    </div>
  );
};

export default NewsOptions;
