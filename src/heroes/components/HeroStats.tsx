import { Star, Users } from "lucide-react";

export const HeroStats = () => {
  return (
    <div className="toolbar-meta">
      <Users size={16} />
      <span>
        <strong>04</strong> registered heroes
      </span>
      <Star size={16} />
      <span>
        <strong>00</strong> favorites
      </span>
    </div>
  );
};
