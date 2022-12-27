import { Component } from "solid-js";
import { countries } from "../../../constants/countries";
import CountryOption from "./CountryOption/CountryOption";

const CountryOptions: Component = () => {
  return (
    <div class="grid grid-cols-5 px-52 py-10 gap-5">
      {countries.map((country) => (
        <CountryOption country={country} />
      ))}
    </div>
  );
};

export default CountryOptions;
