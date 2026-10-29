import { herApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
  const { data } = await herApi.get<HeroesResponse>(`/`);
  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return {
    ...data,
    heroes,
  };
};
