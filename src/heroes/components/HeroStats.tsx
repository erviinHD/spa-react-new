import { Star, Users } from "lucide-react";
import { useHeroSummary } from "../hooks/useHeroSummary";

export const HeroStats = () => {
  const { data: summary } = useHeroSummary();

  return (
    <div className="toolbar-meta">
      <Users size={16} />
      <span>
        <strong>{summary?.totalHeroes}</strong> Personajes registrados
      </span>
      <Star size={16} />
      <span>
        <strong>00</strong> Favoritos
      </span>
    </div>
  );
};
