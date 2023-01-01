import { Component } from "solid-js";
import selectedCountry from "../../../store/selectedCountry";
import selectedCategory from "../../../store/selectedCategory";
import getArticlesToAPI from "../../../store/getArticlesToAPI";

const ErrorComponent: Component = () => {
  const { onSetCountry } = selectedCountry;
  const { onSetCategory } = selectedCategory;
  const {
    setSuccessArticles,
    setSubmittedArticleOptions,
    setGetArticlesLoading,
    setGetArticlesError,
  } = getArticlesToAPI;

  const onResetHandler = () => {
    setSuccessArticles(false);
    setSubmittedArticleOptions(false);
    setGetArticlesError(false);
    setGetArticlesLoading(false);
    onSetCountry(undefined);
    onSetCategory(undefined);
  };

  return (
    <div class="flex flex-col justify-center items-center gap-10">
      <p>뉴스를 불러오는 도중에 오류가 발생했습니다.</p>
      <button
        onClick={onResetHandler}
        class="border rounded-lg shadow-md w-1/2 flex flex-col gap-3 justify-center items-center p-5"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </span>
        <span>다시 해보기</span>
      </button>
    </div>
  );
};

export default ErrorComponent;
