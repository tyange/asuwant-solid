import { Component } from "solid-js";
import CategoryOption from "./CategoryOption/CategoryOption";

import { categories } from "../../../constants/category";

const CategoryOptions: Component = () => {
  return (
    <div class="flex justify-center items-center gap-5 p-10">
      {categories.map((category) => (
        <CategoryOption category={category} />
      ))}
    </div>
  );
};

export default CategoryOptions;
