import { useQuery } from "@tanstack/react-query";
import { Star, Users } from "lucide-react";

import { getSummaryAccion } from "../actions/get-summary.action";

export const HeroStats = () => {
  const { data: summary } = useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummaryAccion,
    staleTime: 1000 * 60 * 5, //5min
  });

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
