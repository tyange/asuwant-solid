import { createRoot, createSignal } from "solid-js";

const createCountry = () => {
  const [country, setCountry] = createSignal<string | undefined>(undefined);

  const onSetCountry = (countryName: string | undefined) => {
    setCountry(countryName);
  };

  return {
    country,
    onSetCountry,
  };
};

export default createRoot(createCountry);
