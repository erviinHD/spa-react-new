import { useNavigate } from "react-router";

import { ArrowRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import type { Hero } from "../types/hero.interface";

interface Props {
  hero: Hero;
}

export const HeroGridCard = ({ hero }: Props) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await navigate(`/heroes/${hero.slug}`);
  };

  return (
    <Card className="hero-card group overflow-hidden rounded-none border-border/80 bg-card p-0">
      <div className="hero-image">
        <img src={hero.image} alt={`${hero.alias}, ${hero.name}`} />
        <div className="image-shade" />
        <Badge
          variant="secondary"
          className="status-pill rounded-none border-0"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${hero.status === "Active" ? "bg-[#27d7df]" : "bg-gray-400"}`}
          />
          {hero.status}
        </Badge>

        <span className="rank-mark font-black! bg-mist-800 p-1 opacity-85">
          {hero.universe.toLocaleUpperCase()}
        </span>
        <button
          className="favorite-button"
          aria-label={`Favorite ${hero.alias}`}
        >
          <Heart size={16} />
        </button>
        <div className="hero-card-copy">
          <h3>{hero.alias}</h3>
          <p>
            {hero.name} - ({hero.team})
          </p>
        </div>
      </div>

      <CardContent className="hero-card-body pt-0!">
        <p className="card-description mt-0!">{hero.description}</p>

        <div className="flex items-center justify-between gap-3">
          <span className="label">HABILIDADES</span>
          <span className="ability">{hero.category}</span>
        </div>
        <div className="stat-list">
          <div className="stat-row">
            <span>Fuerza</span>
            <div className="stat-track">
              <span style={{ width: `${hero.strength * 10}%` }} />
            </div>
            <b>{hero.strength}</b>
          </div>
          <div className="stat-row">
            <span>Velocidad</span>
            <div className="stat-track">
              <span style={{ width: `${hero.speed * 10}%` }} />
            </div>
            <b>{hero.speed}</b>
          </div>
          <div className="stat-row">
            <span>Inteligencia</span>
            <div className="stat-track">
              <span style={{ width: `${hero.intelligence * 10}%` }} />
            </div>
            <b>{hero.intelligence}</b>
          </div>
          <div className="stat-row">
            <span>Durabilidad</span>
            <div className="stat-track">
              <span style={{ width: `${hero.durability * 10}%` }} />
            </div>
            <b>{hero.durability}</b>
          </div>
        </div>
        <div className="flex justify-between ">
          <span className="card-description my-0! h-auto!">
            Primera Aparición: {hero.firstAppearance}
          </span>

          <button className="card-link" onClick={handleClick}>
            Ver perfil <ArrowRight size={15} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
