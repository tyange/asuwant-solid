import { getFlagEmoji } from "../../../../utils/getFlagEmoji";
import { Country } from "../../../../types/country";
import { Component } from "solid-js";

type CountryOptionProps = {
  country: Country;
  onClickCountryButtonHandler?: (country: Country) => void;
  onClickCountryInit?: () => void;
};

const CountryOption: Component<CountryOptionProps> = ({
  country,
  onClickCountryButtonHandler,
  onClickCountryInit,
}) => {
  return (
    <button
      class="w-20 sm:w-24 md:w-28 text-xs sm:text-sm shadow-md border self-center justify-self-center px-5 py-2 flex flex-col items-center rounded-xl break-keep"
      onClick={
        onClickCountryButtonHandler
          ? () => onClickCountryButtonHandler(country)
          : onClickCountryInit
      }
    >
      <span>{getFlagEmoji(country.code)}</span>
      <span>{country["kor-name"]}</span>
    </button>
  );
};

export default CountryOption;
