import { Component } from "solid-js";
import selectedCountry from "../../../store/selectedCountry";
import selectedCategory from "../../../store/selectedCategory";
import getArticlesToAPI from "../../../store/getArticlesToAPI";

import { FaSolidArrowRotateRight } from "solid-icons/fa";

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
          <FaSolidArrowRotateRight />
        </span>
        <span>다시 해보기</span>
      </button>
    </div>
  );
};

export default ErrorComponent;
