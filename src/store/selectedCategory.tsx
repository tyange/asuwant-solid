import { createSignal, createRoot } from "solid-js";
const createCategory = () => {
  const [category, setCategory] = createSignal<string | undefined>(undefined);

  const onSetCategory = (categoryName: string | undefined) => {
    setCategory(categoryName);
  };

  return {
    category,
    onSetCategory,
  };
};

export default createRoot(createCategory);
