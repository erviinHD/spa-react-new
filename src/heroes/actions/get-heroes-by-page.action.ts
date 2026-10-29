import { herApi } from "../api/hero.api";

export const getHeroesByPageAction = async () => {
  const { data } = await herApi.get(`/`);
  console.log({ data });

  return data;
};
