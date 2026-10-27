import { ArrowRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export type Hero = {
  name: string;
  alias: string;
  power: string;
  className: string;
  color: string;
  image: string;
  description: string;
  stats: { label: string; value: number }[];
};

export const HeroGridCard = ({ hero }: { hero: Hero }) => {
  return (
    <Card className="hero-card group overflow-hidden rounded-none border-border/80 bg-card p-0">
      <div className={`hero-image hero-image-${hero.color}`}>
        <img src={hero.image} alt={`${hero.alias}, ${hero.name}`} />
        <div className="image-shade" />
        <Badge
          variant="secondary"
          className="status-pill rounded-none border-0"
        >
          <span /> Active
        </Badge>
        <span className="rank-mark">A-07</span>
        <button
          className="favorite-button"
          aria-label={`Favorite ${hero.alias}`}
        >
          <Heart size={16} />
        </button>
        <div className="hero-card-copy">
          <p className="eyebrow">{hero.className}</p>
          <h3>{hero.alias}</h3>
          <p>{hero.name}</p>
        </div>
      </div>
      <CardContent className="hero-card-body p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="label">ABILITY</span>
          <span className="ability">{hero.power}</span>
        </div>
        <div className="stat-list">
          {hero.stats.map((stat) => (
            <div className="stat-row" key={stat.label}>
              <span>{stat.label}</span>
              <div className="stat-track">
                <span style={{ width: `${stat.value}%` }} />
              </div>
              <b>{stat.value}</b>
            </div>
          ))}
        </div>
        <p className="card-description">{hero.description}</p>
        <button className="card-link">
          View profile <ArrowRight size={15} />
        </button>
      </CardContent>
    </Card>
  );
};
