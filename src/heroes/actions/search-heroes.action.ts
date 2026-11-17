import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

interface Option {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (options: Option = {}) => {
  const { name, category, status, strength, team, universe } = options;

  if (!name && !category && !universe && !team && !status && !strength) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>(`/search`, {
    params: {
      name,
      category,
      status,
      strength,
      team,
      universe,
    },
  });

  return data.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));
};
