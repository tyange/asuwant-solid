import { Category } from "../../../../types/category";

type CategoryOptionProps = {
  category: Category;
  onClickCategoryButtonHandler?: (categoryName: string) => void;
  onClickCategoryInit?: () => void;
};
const CategoryOption = ({
  category,
  onClickCategoryButtonHandler,
  onClickCategoryInit,
}: CategoryOptionProps) => {
  const buttonClass =
    "w-24 h-16 shadow-md border flex flex-col items-center justify-center rounded-xl";

  return (
    <button
      class={buttonClass}
      onClick={
        onClickCategoryButtonHandler
          ? () => onClickCategoryButtonHandler(category.name)
          : onClickCategoryInit
      }
    >
      {category["kor-name"]}
    </button>
  );
};

export default CategoryOption;
