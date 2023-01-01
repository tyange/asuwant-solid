import { Component, Show } from "solid-js";
import selectedCategory from "../../../store/selectedCategory";
import selectedCountry from "../../../store/selectedCountry";
import Notification from "./Notification/Notification";
import getArticlesToAPI from "../../../store/getArticlesToAPI";

const Header: Component = () => {
  const { country } = selectedCountry;
  const { category } = selectedCategory;
  const { submittedArticlesOptions, getArticlesError } = getArticlesToAPI;

  return (
    <header class="font-serif">
      <nav class="h-20 px-5 w-full flex gap-5 justify-center items-center">
        <div>
          <a href="/">
            <span class="text-md sm:text-xl">asuwant</span>
          </a>
        </div>
        <div class="flex flex-1 gap-5 sm:gap-0 justify-between items-center">
          <div>
            <ul>
              <li class="text-xs sm:text-sm">credits</li>
            </ul>
          </div>
          <div>
            <Show
              when={submittedArticlesOptions() && !getArticlesError()}
              keyed={true}
            >
              <Notification
                countryName={country()!["kor-name"]}
                categoryName={category()!["kor-name"]}
              />
            </Show>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
