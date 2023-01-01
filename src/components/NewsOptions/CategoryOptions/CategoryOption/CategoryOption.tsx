import { Category } from "../../../../types/category";

type CategoryOptionProps = {
  category: Category;
  onClickCategoryButtonHandler?: (category: Category) => void;
  onClickCategoryInit?: () => void;
};
const CategoryOption = ({
  category,
  onClickCategoryButtonHandler,
  onClickCategoryInit,
}: CategoryOptionProps) => {
  return (
    <button
      class="w-20 h-16 sm:24 shadow-md border flex flex-col items-center justify-center rounded-xl text-xs sm:text-sm"
      onClick={
        onClickCategoryButtonHandler
          ? () => onClickCategoryButtonHandler(category)
          : onClickCategoryInit
      }
    >
      {category["kor-name"]}
    </button>
  );
};

export default CategoryOption;
