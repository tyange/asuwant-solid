import { Component, createSignal, For, Show } from "solid-js";
import { countries } from "../../../constants/countries";
import CountryOption from "./CountryOption/CountryOption";
import selectedCountry from "../../../store/selectedCountry";
import { Country } from "../../../types/country";

const CountryOptions: Component = () => {
  const [countryList, setCountryList] = createSignal(countries);
  const { onSetCountry } = selectedCountry;

  const onClickCountryButtonHandler = (country: Country) => {
    const filteredCountries = countries.filter(
      (filteredCountry) => filteredCountry.code === country.code
    );

    onSetCountry(country["kor-name"]);
    setCountryList(filteredCountries);
  };

  const onClickCountryInit = () => {
    setCountryList(countries);
  };

  return (
    <div
      class={
        countryList().length > 1
          ? "grid grid-cols-5 px-52 py-10 gap-5"
          : "flex justify-center items-center p-10"
      }
    >
      <Show
        when={countryList().length === 1}
        keyed={true}
        fallback={() => (
          <For each={countryList()}>
            {(country) => (
              <CountryOption
                country={country}
                onClickCountryButtonHandler={onClickCountryButtonHandler}
              />
            )}
          </For>
        )}
      >
        <For each={countryList()}>
          {(country) => (
            <CountryOption
              country={country}
              onClickCountryInit={onClickCountryInit}
            />
          )}
        </For>
      </Show>
    </div>
  );
};

export default CountryOptions;
