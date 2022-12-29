import { getFlagEmoji } from "../../../../utils/getFlagEmoji";
import { Country } from "../../../../types/country";

type CountryOptionProps = {
  country: Country;
  onClickCountryButtonHandler?: (countryCode: string) => void;
  onClickCountryInit?: () => void;
};

const CountryOption = ({
  country,
  onClickCountryButtonHandler,
  onClickCountryInit,
}: CountryOptionProps) => {
  return (
    <button
      class="xl:w-40 lg:w-fit xl:h-16 lg:h-fit shadow-md border self-center justify-self-center px-5 py-2 flex flex-col items-center rounded-xl"
      onClick={
        onClickCountryButtonHandler
          ? () => onClickCountryButtonHandler(country.code)
          : onClickCountryInit
      }
    >
      <span>{getFlagEmoji(country.code)}</span>
      <span>{country["kor-name"]}</span>
    </button>
  );
};

export default CountryOption;
