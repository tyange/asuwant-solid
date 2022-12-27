import { Component } from "solid-js";
import CountryOptions from "./CountryOptions/CountryOptions";
import CategoryOptions from "./CategoryOptions/CategoryOptions";

const NewsOptions: Component = () => {
  return (
    <div>
      <CountryOptions />
      <div class="w-full flex justify-center items-center">
        <div class="w-1/4 border-t-2"></div>
      </div>
      <CategoryOptions />
    </div>
  );
};

export default NewsOptions;
