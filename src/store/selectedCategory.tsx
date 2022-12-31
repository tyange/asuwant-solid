import { createSignal, createRoot } from "solid-js";
import { Category } from "../types/category";
const createCategory = () => {
  const [category, setCategory] = createSignal<Category | undefined>(undefined);

  const onSetCategory = (category: Category | undefined) => {
    setCategory(category);
  };

  return {
    category,
    onSetCategory,
  };
};

export default createRoot(createCategory);
