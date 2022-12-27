import { Category } from "../../../../types/category";

type CategoryOptionProps = {
  category: Category;
  onClickCategoryButtonHandler: (categoryName: string) => void;
};
const CategoryOption = ({
  category,
  onClickCategoryButtonHandler,
}: CategoryOptionProps) => {
  return (
    <button
      class="w-24 h-16 shadow-md border flex flex-col items-center justify-center rounded-xl"
      onClick={() => onClickCategoryButtonHandler(category.name)}
    >
      {category["kor-name"]}
    </button>
  );
};

export default CategoryOption;
