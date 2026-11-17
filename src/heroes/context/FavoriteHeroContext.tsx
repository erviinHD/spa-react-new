import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  //State
  favorites: Hero[];
  favoritecount: number;

  //Methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (hero: Hero) => boolean;
}

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage,
  );

  const toggleFavorites = (hero: Hero) => {
    const heroExist = favorites.some((h) => h.id === hero.id);

    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }

    setFavorites([...favorites, hero]);
  };

  const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContext
      value={{
        //State
        favoritecount: favorites.length,
        favorites: favorites,

        //Methods
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorites,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
