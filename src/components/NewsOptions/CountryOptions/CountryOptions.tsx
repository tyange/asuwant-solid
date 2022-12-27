import { Component, createSignal } from "solid-js";
import { countries } from "../../../constants/countries";
import CountryOption from "./CountryOption/CountryOption";

const CountryOptions: Component = () => {
  const [countryList, setCountryList] = createSignal(countries);
  const onClickCountryButtonHandler = (countryCode: string) => {
    const filteredCountries = countries.filter(
      (country) => country.code === countryCode
    );

    setCountryList(filteredCountries);
  };

  return (
    <div
      class={
        countryList().length > 1
          ? "grid grid-cols-5 px-52 py-10 gap-5"
          : "flex justify-center items-center p-10"
      }
    >
      {countryList().map((country) => (
        <CountryOption
          country={country}
          onClickCountryButtonHandler={onClickCountryButtonHandler}
        />
      ))}
    </div>
  );
};

export default CountryOptions;
