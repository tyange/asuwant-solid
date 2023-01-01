import { createRoot, createSignal } from "solid-js";

const getArticlesToAPI = () => {
  const [submittedArticlesOptions, setSubmittedArticleOptions] =
    createSignal(false);
  const [getArticlesError, setGetArticlesError] = createSignal(false);
  const [getArticlesLoading, setGetArticlesLoading] = createSignal(false);
  const [successGetArticles, setSuccessArticles] = createSignal(false);

  return {
    submittedArticlesOptions,
    getArticlesLoading,
    getArticlesError,
    successGetArticles,
    setSubmittedArticleOptions,
    setGetArticlesLoading,
    setGetArticlesError,
    setSuccessArticles,
  };
};

export default createRoot(getArticlesToAPI);
