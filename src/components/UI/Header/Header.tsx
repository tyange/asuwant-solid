import { Component } from "solid-js";
import category from "../../../store/selectedCategory";
import selectedCategory from "../../../store/selectedCategory";
import selectedCountry from "../../../store/selectedCountry";

const Header: Component = () => {
  const { country } = selectedCountry;
  const { category } = selectedCategory;

  return (
    <header class="p-5 font-serif">
      <nav class="flex gap-5 items-center">
        <div>
          <a href="/">
            <span class="text-xl">asuwant</span>
          </a>
        </div>
        <div class="flex flex-1 justify-between items-center">
          <div>
            <ul>
              <li>credits</li>
            </ul>
          </div>
          <div>
            <p>notification</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
