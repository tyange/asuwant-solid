import { createRoot, createSignal } from "solid-js";
import { Country } from "../types/country";

const createCountry = () => {
  const [country, setCountry] = createSignal<Country | undefined>(undefined);

  const onSetCountry = (country: Country | undefined) => {
    setCountry(country);
  };

  return {
    country,
    onSetCountry,
  };
};

export default createRoot(createCountry);
