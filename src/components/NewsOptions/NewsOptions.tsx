import { Component } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import selectedCountry from "../../store/selectedCountry";
import selectedCategory from "../../store/selectedCategory";
import SubmitButtons from "./SubmitButtons/SubmitButtons";

const NewsOptions: Component = () => {
  const { country } = selectedCountry;
  const { category } = selectedCategory;

  const divider = () => (
    <div class="w-full flex justify-center items-center">
      <div class="w-1/4 border-t-2"></div>
    </div>
  );

  return (
    <div>
      <CountryOptions />
      {divider()}
      <CategoryOptions />
      {country() && category() && (
        <>
          {divider()}
          <SubmitButtons />
        </>
      )}
    </div>
  );
};

export default NewsOptions;
