import getArticlesToAPI from "../../../../store/getArticlesToAPI";
import { Match, Switch } from "solid-js";

type NotificationProps = {
  countryName: string;
  categoryName: string;
};

const Notification = ({ countryName, categoryName }: NotificationProps) => {
  const { getArticlesLoading, successGetArticles } = getArticlesToAPI;

  return (
    <div class="border shadow-sm py-3 px-2 sm:px-5 rounded-md text-xs sm:text-sm break-keep font-sans">
      <Switch>
        <Match when={getArticlesLoading()} keyed={true}>
          <span>
            {countryName}의 {categoryName} 뉴스를 불러오는 중입니다
          </span>
        </Match>
        <Match when={successGetArticles()} keyed={true}>
          <span>
            {countryName}의 {categoryName} 뉴스를 보고 계십니다
          </span>
        </Match>
      </Switch>
    </div>
  );
};

export default Notification;
