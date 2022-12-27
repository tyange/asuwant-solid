import { getFlagEmoji } from "../../../../utils/getFlagEmoji";
import { Country } from "../../../../types/country";

type CountryOptionProps = {
  country: Country;
};

const CountryOption = ({ country }: CountryOptionProps) => {
  return (
    <button class="w-40 h-16 shadow-md border self-center justify-self-center px-5 py-2 flex flex-col items-center rounded-xl">
      <span>{getFlagEmoji(country.code)}</span>
      <span>{country["kor-name"]}</span>
    </button>
  );
};

export default CountryOption;
