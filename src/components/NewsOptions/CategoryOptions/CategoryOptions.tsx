import { Component, createSignal } from "solid-js";
import CategoryOption from "./CategoryOption/CategoryOption";

import { categories } from "../../../constants/category";

const CategoryOptions: Component = () => {
  const [categoryList, setCategoryList] = createSignal(categories);
  const onClickCategoryButtonHandler = (categoryName: string) => {
    const filteredCategories = categoryList().filter(
      (category) => category.name === categoryName
    );

    setCategoryList(filteredCategories);
  };

  return (
    <div
      class={
        categoryList().length > 1
          ? "flex justify-center items-center gap-5 p-10"
          : "flex justify-center items-center p-10"
      }
    >
      {categoryList().map((category) => (
        <CategoryOption
          category={category}
          onClickCategoryButtonHandler={onClickCategoryButtonHandler}
        />
      ))}
    </div>
  );
};

export default CategoryOptions;
