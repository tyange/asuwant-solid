import { Component } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import selectedCountry from "../../store/selectedCountry";
import selectedCategory from "../../store/selectedCategory";
import SubmitButtons from "./SubmitButtons/SubmitButtons";
import TopHeadlineAPI from "../../api/topHeadlines/TopHeadlineAPI";

const NewsOptions: Component = () => {
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

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <CountryOptions />
      {divider()}
      <CategoryOptions />
      {country() && category() && (
        <>
          {divider()}
          <SubmitButtons onClickSubmitHandler={onClickSubmitHandler} />
        </>
      )}
    </div>
  );
};

export default NewsOptions;
