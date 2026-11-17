import { use } from "react";
import { Star, Users } from "lucide-react";
import { useHeroSummary } from "../hooks/useHeroSummary";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";

export const HeroStats = () => {
  const { data: summary } = useHeroSummary();
  const { favoritecount } = use(FavoriteHeroContext);
  return (
    <div className="toolbar-meta">
      <Users size={16} />
      <span>
        <strong>{summary?.totalHeroes}</strong> Personajes registrados
      </span>
      <Star size={16} />
      <span>
        <strong>{favoritecount}</strong> Favoritos
      </span>
    </div>
  );
};
