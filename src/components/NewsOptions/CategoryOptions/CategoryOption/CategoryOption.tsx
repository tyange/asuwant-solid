import { Category } from "../../../../types/category";

type CategoryOptionProps = {
  category: Category;
};
const CategoryOption = ({ category }: CategoryOptionProps) => {
  return (
    <button class="w-24 h-16 shadow-md border flex flex-col items-center justify-center rounded-xl">
      {category["kor-name"]}
    </button>
  );
};

export default CategoryOption;
