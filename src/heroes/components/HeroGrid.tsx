import type { Hero } from "../types/hero.interface";
import { HeroGridCard } from "./HeroGridCard";

interface Props {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
  return (
    <div className="hero-grid mt-2">
      {heroes.map((hero) => (
        <HeroGridCard hero={hero} key={hero.id} />
      ))}
    </div>
  );
};
