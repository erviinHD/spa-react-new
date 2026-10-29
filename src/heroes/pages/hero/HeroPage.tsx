import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";

export const HeroPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Super héroes"
        description="Descubre, explora y administra super heroes y villanos "
      />

      <section className="directory-section " aria-label="Hero directory">
        {/* Hero Stats */}
        <div className="directory-toolbar justify-end!">
          <HeroStats />
        </div>
      </section>

      <section className="directory-section" aria-label="Hero directory">
        <HeroGrid />
      </section>
    </>
  );
};
