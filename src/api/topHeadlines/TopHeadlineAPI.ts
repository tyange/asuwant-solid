import { instance } from "../axiosInstance";

const TopHeadlineAPI = {
  articles: async (countryCode: string, categoryName: string) => {
    const url = `/top-headlines?country=${countryCode}&category=${categoryName}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;

    return await instance.get(url);
  },
};

export default TopHeadlineAPI;
