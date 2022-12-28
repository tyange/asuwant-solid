import { Component, createSignal, For, Show } from "solid-js";
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

  const onClickCategoryInit = () => {
    setCategoryList(categories);
  };

  return (
    <div
      class={
        categoryList().length > 1
          ? "flex justify-center items-center gap-5 p-10"
          : "flex justify-center items-center p-10"
      }
    >
      <Show
        when={categoryList().length === 1}
        fallback={() => (
          <For each={categoryList()}>
            {(category) => (
              <CategoryOption
                category={category}
                onClickCategoryButtonHandler={onClickCategoryButtonHandler}
              />
            )}
          </For>
        )}
        keyed={true}
      >
        <For each={categoryList()}>
          {(category) => (
            <CategoryOption
              category={category}
              onClickCategoryInit={onClickCategoryInit}
            />
          )}
        </For>
      </Show>
    </div>
  );
};

export default CategoryOptions;
