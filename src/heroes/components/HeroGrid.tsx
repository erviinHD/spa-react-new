import { HeroGridCard, type Hero } from "./HeroGridCard";

const heroes: Hero[] = [
  {
    name: "Maya Chen",
    alias: "Quantum",
    power: "Manipulates time",
    className: "Tactician",
    color: "cyan",
    image: "/hero-quantum.png",
    description:
      "A quantum physicist who learned to bend the seconds between moments.",
    stats: [
      { label: "Power", value: 92 },
      { label: "Agility", value: 88 },
      { label: "Resolve", value: 96 },
    ],
  },
];

export const HeroGrid = () => {
  return (
    <div className="hero-grid">
      {heroes.map((hero) => (
        <HeroGridCard hero={hero} key={hero.alias} />
      ))}
    </div>
  );
};
