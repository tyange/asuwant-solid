import { getFlagEmoji } from "../../../../utils/getFlagEmoji";
import { Country } from "../../../../types/country";

type CountryOptionProps = {
  country: Country;
  onClickCountryButtonHandler?: (country: Country) => void;
  onClickCountryInit?: () => void;
};

const CountryOption = ({
  country,
  onClickCountryButtonHandler,
  onClickCountryInit,
}: CountryOptionProps) => {
  return (
    <button
      class="w-32 sm:w-20 md:w-28 text-xs sm:text-sm shadow-md border self-center justify-self-center px-5 py-2 flex flex-col items-center rounded-xl break-keep"
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
