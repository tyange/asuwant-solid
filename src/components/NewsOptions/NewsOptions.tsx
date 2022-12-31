import { Component } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import selectedCountry from "../../store/selectedCountry";
import selectedCategory from "../../store/selectedCategory";
import SubmitButtons from "./SubmitButtons/SubmitButtons";
import axios from "axios";

const NewsOptions: Component = () => {
  const { country } = selectedCountry;
  const { category } = selectedCategory;

  const divider = () => (
    <div class="w-full flex justify-center items-center">
      <div class="w-1/4 border-t-2"></div>
    </div>
  );

  const onClickSubmitHandler = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      country()?.code
    }&category=${category()?.name}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    try {
      const res = await axios.get(url);

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
