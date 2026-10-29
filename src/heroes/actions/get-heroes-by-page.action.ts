import { herApi } from "../api/hero.api";

export const getHeroesByPage = async () => {
  const { data } = await herApi.get(`/`);

  return data;
};
