import { Component } from "solid-js";
import selectedCountry from "../../../store/selectedCountry";
import selectedCategory from "../../../store/selectedCategory";

const ErrorComponent = () => {
  const { onSetCountry } = selectedCountry;
  const { onSetCategory } = selectedCategory;

  const onResetHandler = () => {
    onSetCountry(undefined);
    onSetCategory(undefined);
  };

  return (
    <div>
      <button onClick={onResetHandler}>다시 해보기</button>
    </div>
  );
};

export default ErrorComponent;
